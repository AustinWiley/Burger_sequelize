// Import the ORM to create functions that will interact with the database.
// var orm = require("../config/orm.js");
var orm = require("../config/orm");

var burger = {
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(burgerName, cb) {
    orm.insertOne("burgers", burgerName, function(res) {
      cb(res);
    });
  },
  update: function(burgerName, cb) {
    orm.updateOne("burgers", burgerName, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;