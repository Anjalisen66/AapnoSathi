const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const placeRoutes = require("./routes/placeRoutes");
const dotenv = require("dotenv");
const path = require("path");
const __dirname = path.resolve();

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); 


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api", placeRoutes);

app.listen(5003, () => console.log("Server running on port 5003"));
