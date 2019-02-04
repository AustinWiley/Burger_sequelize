var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger");
console.log("inside controllers")
// Create all our routes and set up logic within those routes where required.
// router.get("/", function(req, res) {
//     console.log('get it controller')
//   burger.all(function(data) {
//     var hbsObject = {
//       burgers: data
//     };
//     console.log(hbsObject);
//     console.log("get homepage")
//     res.render("index", hbsObject);
//   });
// });

router.get("/", function(req, res) {
    console.log('get it controller')
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    console.log("get homepage")
    res.render("index", hbsObject);
  });
});





router.post("api/burgers/:burger", function(req, res) {
  burger.create(req.body.burger,  function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  burger.update(req.body.id, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
