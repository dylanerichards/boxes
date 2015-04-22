var mongoose = require("mongoose");

var BoxSchema = new mongoose.Schema({
  id: Number,
  created_at: Date,
  customer_name: String,
  address: String,
  items: String
});

module.exports = mongoose.model("Box", BoxSchema);
