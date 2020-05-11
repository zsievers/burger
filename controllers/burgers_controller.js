var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.

// GET REQUEST
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// POST REQUEST
router.post("/insertOne", function (req, res) {
  burger.insertOne(req.body.burger_name, function () {
        // send back id of new post
      res.redirect("/");
    });
});


router.post("/updateOne", function(req,res) {
    var id = req.body.id
 
    burger.updateOne(id, function(){
       res.redirect("/");
    });
});

// export routes to server.js
module.exports = router;