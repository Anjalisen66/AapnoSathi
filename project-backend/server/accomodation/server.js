const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const pgRoutes = require("./routes/pgRoutes");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads")); // Make uploads folder public


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api", pgRoutes);

app.listen(5001, () => console.log("Server running on port 5001"));
