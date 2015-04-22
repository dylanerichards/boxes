var mongoose = require("mongoose");

var BoxSchema = new mongoose.Schema({
  id: Number,
  customerName: String,
  address: String,
  items: String
});

BoxSchema.pre("save", function(next) {
  now = new Date();
  if (!this.created_at) {
    this.created_at = now;
  };

  this.itemCount = this.items.split("/").length;
  next();
})

module.exports = mongoose.model("Box", BoxSchema);
