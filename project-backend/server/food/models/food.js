const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  name: String,
  location: String,
  type: String, // restaurant, cafe, dhaba, local
  cost: Number,
  cuisine: String,
  specialty: String,
  foodType: String,
  image: String,
  dineIn: Boolean,
  dineOut: Boolean,
  takeaway: Boolean,
  link:String,
});

module.exports = mongoose.model("Food", foodSchema);
