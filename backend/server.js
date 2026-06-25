const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Database Connection
require("./config/db");

const appointmentRoutes = require("./routes/appointmentRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/appointments", appointmentRoutes);

const PORT = process.env.PORT || 5000;

app.listen(5000, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});