var express = require("express");
var router = express.Router();

// const Burger = require("../models/burger.js");

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger");


router.get("/", function (req, res) {
  burger.findAll({}).then(function (data) {
    // res.json(data);
    console.log(data)
    let hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/", function (req, res) {
  console.log(req.body)
  burger.create({
      burger_name: req.body.name,
      devoured: 0
    })
    .then(function (data) {
      // res.json(data);
      console.log(data)
      res.json(data)
    });
});

router.put("/burger/:burger", function (req, res) {
  console.log(req.body)
  const newData = {  
    devoured: 1
  };
  
  burger.update(newData, {where: { burger_name: req.body.devoured } })  
  .then(updatedBurger => {
    console.log(updatedBurger)
  })
});












// router.get("/", function(req, res) {
//   burger.all(function(data) {
//     var hbsObject = {
//       burgers: data
//     };
//     console.log(hbsObject);
//     res.render("index", hbsObject);
//   });
// });

// router.post("/", function(req, res) {
//   burger.create(req.body.name,  function(result) {
//     console.log("this is the result:"+result)
//     res.json(result)
//   });
// });

// router.put("/burger/:burger", function (req, res) {
//   burger.update(req.body.devoured, function (result) {
//     // if (result.changedRows == 0) {
//     //   // If no rows were changed, then the burger must not exist, so 404
//     //   return res.status(404).end();
//     // } else {
//     //   res.status(200).end();
//     // }
//     res.json(result)
//   });
// });

// Export routes for server.js to use.
module.exports = router;