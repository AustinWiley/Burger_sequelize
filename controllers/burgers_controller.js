var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger");
console.log("inside controllers")

router.get("/", function(req, res) {
    console.log('get it controller')
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log("sup bro")
    console.log(hbsObject);
    console.log("get homepage")
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
    console.log('post')
    console.log(req.body.name);
  burger.create(req.body.name,  function(result) {
      console.log('create controller')
    // Send back the ID of the new quote
    console.log("this is the result:"+result)
    // res.json({ id: result.insertId });
    res.json(result)

  });
});

router.put("/", function(req, res) {
    console.log('put')
    console.log(req.body.name);
  burger.update(req.body.name, function(result) {
    // if (result.changedRows == 0) {
    //   // If no rows were changed, then the ID must not exist, so 404
    //   return res.status(404).end();
    // } else {
    //   res.status(200).end();
    // }
    res.json(result)
  });
});

// Export routes for server.js to use.
module.exports = router;
