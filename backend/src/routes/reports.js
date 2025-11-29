const express = require("express");
const auth = require("../middleware/auth");
const Member = require("../models/Member");
const Event = require("../models/Event");
const FinanceTransaction = require("../models/FinanceTransaction");
const MinistryApplication = require("../models/MinistryApplication");
const { Parser } = require("json2csv");
const PDFDocument = require("pdfkit");

const router = express.Router();

// All reports require admin
router.use(auth);

router.get("/overview", async (req, res) => {
  const [membersCount, eventsCount, applicationsCount] = await Promise.all([
    Member.countDocuments(),
    Event.countDocuments(),
    MinistryApplication.countDocuments(),
  ]);

  const financeAgg = await FinanceTransaction.aggregate([
    {
      $group: {
        _id: "$type",
        total: { $sum: "$amount" },
      },
    },
  ]);

  const financeTotals = { income: 0, expense: 0 };
  financeAgg.forEach((row) => {
    financeTotals[row._id] = row.total;
  });

  res.json({
    membersCount,
    eventsCount,
    applicationsCount,
    financeTotals,
  });
});

// CSV overview
router.get("/overview.csv", async (req, res) => {
  const [membersCount, eventsCount, applicationsCount] = await Promise.all([
    Member.countDocuments(),
    Event.countDocuments(),
    MinistryApplication.countDocuments(),
  ]);

  const financeAgg = await FinanceTransaction.aggregate([
    {
      $group: {
        _id: "$type",
        total: { $sum: "$amount" },
      },
    },
  ]);

  const financeTotals = { income: 0, expense: 0 };
  financeAgg.forEach((row) => {
    financeTotals[row._id] = row.total;
  });

  const rows = [
    { metric: "membersCount", value: membersCount },
    { metric: "eventsCount", value: eventsCount },
    { metric: "applicationsCount", value: applicationsCount },
    { metric: "financeIncome", value: financeTotals.income },
    { metric: "financeExpense", value: financeTotals.expense },
  ];

  const parser = new Parser({ fields: ["metric", "value"] });
  const csv = parser.parse(rows);

  res.header("Content-Type", "text/csv");
  res.attachment("overview-report.csv");
  res.send(csv);
});

// PDF overview
router.get("/overview.pdf", async (req, res) => {
  const [membersCount, eventsCount, applicationsCount] = await Promise.all([
    Member.countDocuments(),
    Event.countDocuments(),
    MinistryApplication.countDocuments(),
  ]);

  const financeAgg = await FinanceTransaction.aggregate([
    {
      $group: {
        _id: "$type",
        total: { $sum: "$amount" },
      },
    },
  ]);

  const financeTotals = { income: 0, expense: 0 };
  financeAgg.forEach((row) => {
    financeTotals[row._id] = row.total;
  });

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "attachment; filename=overview-report.pdf");

  const doc = new PDFDocument();
  doc.pipe(res);

  doc.fontSize(18).text("MUTCU Overview Report", { underline: true });
  doc.moveDown();
  doc.fontSize(12).text(`Members: ${membersCount}`);
  doc.text(`Events: ${eventsCount}`);
  doc.text(`Ministry Applications: ${applicationsCount}`);
  doc.moveDown();
  doc.text(`Finance income (all-time): ${financeTotals.income}`);
  doc.text(`Finance expense (all-time): ${financeTotals.expense}`);

  doc.end();
});

module.exports = router;
