const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const pgRoutes = require("./routes/pgRoutes");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); 



mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
console.log("Loaded ENV:", require('dotenv').config());

console.log("Mongo URL:", process.env.MONGO_URI);

app.use("/api", pgRoutes);

app.listen(5001, () => console.log("Server running on port 5001")
);
