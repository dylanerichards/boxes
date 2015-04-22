var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var Box = require("./models/box");
var app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

var port = process.env.PORT || 3000;

mongoose.connect("mongodb://localhost:27017/boxes")

var router = express.Router();
app.use("/", router);

router.get("/", function(req, res) {
  res.json({ message: "Success!" });
});


app.listen(port);
console.log("Listening on port " + port);


// Index route
var boxesRoute = router.route("/boxes")

// POST
boxesRoute.post(function(req, res) {
  var box = new Box();

  box.id = req.body.id;
  box.createdAt = req.body.createdAt;
  box.customerName = req.body.customerName;
  box.address = req.body.address;
  box.items = req.body.items;

  box.save(function(err) {
    if (err)
      res.send(err);
    res.json({ message: "Added Box!", data: box });
  })
});

// GET index
boxesRoute.get(function(req, res) {
  Box.find(function(err, boxes) {
    if (err)
      res.send(err);
    res.json(boxes);
  });
});
