var express = require("express");
var mongoose = require("mongoose");
var app = express();

var port = process.env.PORT || 3000;

mongoose.connect("mongodb://localhost:27017/boxes")

var router = express.Router();
app.use("/", router);

router.get("/", function(req, res) {
  res.json({ message: "Success!" });
});


app.listen(port);
console.log("Listening on port " + port);
