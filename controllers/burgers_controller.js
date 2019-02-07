var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger");

router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  burger.create(req.body.name,  function(result) {
    console.log("this is the result:"+result)
    res.json(result)
  });
});

router.put("/burger/:burger", function(req, res) {
  burger.update(req.body.devoured, function(result) {
    // if (result.changedRows == 0) {
    //   // If no rows were changed, then the burger must not exist, so 404
    //   return res.status(404).end();
    // } else {
    //   res.status(200).end();
    // }
    res.json(result)
  });
});

// Export routes for server.js to use.
module.exports = router;
