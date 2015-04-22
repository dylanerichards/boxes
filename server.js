var express = require("express");
var app = express();

var port = process.env.PORT || 3000;

var router = express.Router();
app.use("/", router);

router.get("/", function(req, res) {
  res.json({ message: "Success!" });
});


app.listen(port);
console.log("Listening on port " + port);
