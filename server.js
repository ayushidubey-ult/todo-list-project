const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const connectDB = require("./config/db");


const app = express();
app.use(cors());
app.use(express.json())

// Database connect
connectDB();

// Routes
    const taskRoutes = require("./routes/taskRoutes");
app.use("/api/tasks", taskRoutes);

// Server start
  const PORT=5000;
app.listen(PORT, () => 
  console.log('Server running on port ${PORT}'));
