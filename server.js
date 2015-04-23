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
  box.itemCount = req.body.items.split("/").length;

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

// GET /:id
var boxRoute = router.route("/boxes/:id");

boxRoute.get(function(req, res) {
  Box.findOne({ id: req.params.id }, function(err, box) {
    if (err)
      res.send(err);
    res.json(box);
  });
});

// DELETE /:id
boxRoute.delete(function(req, res) {
  Box.findOneAndRemove({ id: req.params.id }, function(err) {
    if (err)
      res.send(err);
    res.json({ message: "Box removed!" });
  });
});

// Find route
var findRoute = router.route("/find")
var boxCollection = {};

findRoute.get(function(req, res) {
  Box.find(function(err, boxes) {
    boxCollection.byItemCount = boxes;

    Box.find(function (error, coll2) {
      boxCollection.byCreatedAt = coll2;

      Box.find(function (error, coll3) {
        boxCollection.byAddress = coll3;

        res.json(boxCollection);
      }).sort("address");
    }).sort("-createdAt");
  }).sort("-itemCount");
});
