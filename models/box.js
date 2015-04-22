var mongoose = require("mongoose");
var timestamps = require("mongoose-timestamp");

var BoxSchema = new mongoose.Schema({
  id: Number,
  customerName: String,
  address: String,
  items: String,
});

BoxSchema.plugin(timestamps);

module.exports = mongoose.model("Box", BoxSchema);
