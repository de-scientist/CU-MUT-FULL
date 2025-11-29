require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connectDB } = require("./config/db");

const authRoutes = require("./routes/auth");
const eventRoutes = require("./routes/events");
const resourceRoutes = require("./routes/resources");
const galleryRoutes = require("./routes/gallery");
const ministryApplicationsRoutes = require("./routes/ministryApplications");
const memberRoutes = require("./routes/members");
const financeRoutes = require("./routes/finances");
const reportsRoutes = require("./routes/reports");
const programRoutes = require("./routes/programs");
const evaluationRoutes = require("./routes/evaluations");
const nominationRoutes = require("./routes/nominations");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "ok", message: "MUTCU Admin API" });
});

app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/resources", resourceRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/ministry-applications", ministryApplicationsRoutes);
app.use("/api/members", memberRoutes);
app.use("/api/finances", financeRoutes);
app.use("/api/reports", reportsRoutes);
app.use("/api/programs", programRoutes);
app.use("/api/evaluations", evaluationRoutes);
app.use("/api/nominations", nominationRoutes);

const PORT = process.env.PORT || 4000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Failed to connect DB", err);
    process.exit(1);
  });
