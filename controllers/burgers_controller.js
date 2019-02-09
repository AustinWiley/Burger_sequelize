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
  burger.update(newData, {
      where: {
        burger_name: req.body.devoured
      }
    })
    .then(data => {
      console.log(data);
      res.json(data);
    })
});

module.exports = router;