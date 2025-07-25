const mongoose = require("mongoose");
const querySchema = new mongoose.Schema({
  firstname:  {
     type: String,
      required: true 
    },
  lastname:  {
     type: String,
      required: true 
    },
  email:  {
     type: String,
      required: true 
    },
  message:  {
     type: String,
      required: true 
    },
  createdAt: {
     type: Date,
      default: Date.now 
    },
});

module.exports = mongoose.model("Query", querySchema);
