var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.


router.get("/", function (req, res) {
  burger.all(function (data) {
    var hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function (req, res) {
  burger.create(
    ["burger_name", "devoured"],
    [req.body.burger_name, req.body.devoured],
    function (result) {
        // send back id of new post
      res.json({ id: result.insertId });
    }
  );
});

router.put("/api/burgers/:id", function(req,res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({ 
        devoured: req.body.devoured
    }, condition, function(result){
        if (result.changedRows === 0) {
            // if no rows were changed, id must not exist so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", function(req,res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.delete(condition, function(results){
        if (result.affectedRows === 0) {
            // if no rows were affected, the id must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});


// export routes to server.js
module.exports = router;
