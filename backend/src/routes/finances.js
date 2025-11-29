const express = require("express");
const FinanceTransaction = require("../models/FinanceTransaction");
const auth = require("../middleware/auth");
const { financeCreateSchema } = require("../validation/financeSchemas");
const { Parser } = require("json2csv");
const PDFDocument = require("pdfkit");

const router = express.Router();

// All finance endpoints require admin auth
router.use(auth);

// List transactions (optionally filter by year)
router.get("/", async (req, res) => {
  const { year } = req.query;
  const filter = {};
  if (year) {
    const start = new Date(`${year}-01-01T00:00:00.000Z`);
    const end = new Date(`${Number(year) + 1}-01-01T00:00:00.000Z`);
    filter.date = { $gte: start, $lt: end };
  }

  const txs = await FinanceTransaction.find(filter).sort({ date: -1 });
  res.json(txs);
});

// Create transaction
router.post("/", async (req, res) => {
  try {
    const parsed = financeCreateSchema.parse(req.body);
    const tx = await FinanceTransaction.create(parsed);
    res.status(201).json(tx);
  } catch (err) {
    if (err.name === "ZodError") {
      return res.status(400).json({
        message: "Validation error",
        errors: err.errors,
      });
    }
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Update transaction
router.put("/:id", async (req, res) => {
  try {
    const parsed = financeCreateSchema.partial().parse(req.body);
    const tx = await FinanceTransaction.findByIdAndUpdate(
      req.params.id,
      parsed,
      { new: true }
    );
    res.json(tx);
  } catch (err) {
    if (err.name === "ZodError") {
      return res.status(400).json({
        message: "Validation error",
        errors: err.errors,
      });
    }
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Delete transaction
router.delete("/:id", async (req, res) => {
  await FinanceTransaction.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

// Yearly summary
router.get("/summary", async (req, res) => {
  const { year } = req.query;
  if (!year) {
    return res.status(400).json({ message: "year query parameter is required" });
  }

  const start = new Date(`${year}-01-01T00:00:00.000Z`);
  const end = new Date(`${Number(year) + 1}-01-01T00:00:00.000Z`);

  const agg = await FinanceTransaction.aggregate([
    { $match: { date: { $gte: start, $lt: end } } },
    {
      $group: {
        _id: { type: "$type", category: "$category" },
        total: { $sum: "$amount" },
      },
    },
  ]);

  const summary = {
    year: Number(year),
    totals: {
      income: 0,
      expense: 0,
    },
    categories: {},
  };

  agg.forEach((row) => {
    const { type, category } = row._id;
    if (!summary.categories[category]) {
      summary.categories[category] = { income: 0, expense: 0 };
    }
    summary.categories[category][type] += row.total;
    summary.totals[type] += row.total;
  });

  res.json(summary);
});

// CSV export for yearly summary
router.get("/summary.csv", async (req, res) => {
  const { year } = req.query;
  if (!year) {
    return res.status(400).json({ message: "year query parameter is required" });
  }

  const start = new Date(`${year}-01-01T00:00:00.000Z`);
  const end = new Date(`${Number(year) + 1}-01-01T00:00:00.000Z`);

  const agg = await FinanceTransaction.aggregate([
    { $match: { date: { $gte: start, $lt: end } } },
    {
      $group: {
        _id: { type: "$type", category: "$category" },
        total: { $sum: "$amount" },
      },
    },
  ]);

  const rows = agg.map((row) => ({
    year,
    type: row._id.type,
    category: row._id.category,
    total: row.total,
  }));

  const parser = new Parser({ fields: ["year", "type", "category", "total"] });
  const csv = parser.parse(rows);

  res.header("Content-Type", "text/csv");
  res.attachment(`finance-summary-${year}.csv`);
  res.send(csv);
});

// PDF export for yearly summary
router.get("/summary.pdf", async (req, res) => {
  const { year } = req.query;
  if (!year) {
    return res.status(400).json({ message: "year query parameter is required" });
  }

  const start = new Date(`${year}-01-01T00:00:00.000Z`);
  const end = new Date(`${Number(year) + 1}-01-01T00:00:00.000Z`);

  const agg = await FinanceTransaction.aggregate([
    { $match: { date: { $gte: start, $lt: end } } },
    {
      $group: {
        _id: { type: "$type", category: "$category" },
        total: { $sum: "$amount" },
      },
    },
  ]);

  const summary = {
    income: 0,
    expense: 0,
  };
  const categories = {};

  agg.forEach((row) => {
    const { type, category } = row._id;
    if (!categories[category]) {
      categories[category] = { income: 0, expense: 0 };
    }
    categories[category][type] += row.total;
    summary[type] += row.total;
  });

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    `attachment; filename=finance-summary-${year}.pdf`
  );

  const doc = new PDFDocument();
  doc.pipe(res);

  doc.fontSize(18).text(`Finance Summary ${year}`, { underline: true });
  doc.moveDown();
  doc.fontSize(12).text(`Total income: ${summary.income}`);
  doc.text(`Total expense: ${summary.expense}`);
  doc.moveDown();

  doc.fontSize(14).text("By Category:");
  doc.moveDown(0.5);
  Object.entries(categories).forEach(([cat, val]) => {
    doc.fontSize(12).text(
      `${cat}: income ${val.income}, expense ${val.expense}`
    );
  });

  doc.end();
});

module.exports = router;
