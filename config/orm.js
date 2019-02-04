
var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
  selectAll: function(table) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [table], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  updateOne: function(table, burgerName) {
    var queryString = "UPDATE ?? SET devoured = 1 WHERE burger_name = ?;";
    connection.query(queryString, [table, burgerName], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  insertOne: function(table, newBurger) {
    var queryString = "INSERT INTO ?? (burger_name, devoured) VALUES ( ?, 0);";
    connection.query(queryString, [table, newBurger], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  }
};

module.exports = orm;