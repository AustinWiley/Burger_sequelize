
var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
  selectAll: function(table, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [table], function(err, result) {
      if (err) throw err;
      console.log('inside select all orm')
      console.log(result);
      cb(result)
    });
  },
  updateOne: function(table, burgerName, cb) {
    var queryString = "UPDATE ?? SET devoured=1 WHERE burger_name=?;";
    connection.query(queryString, [table, burgerName], function(err, result) {
      if (err) throw err;
      console.log('inside update orm')
      console.log(result);
      cb(result);
    });
  },
  insertOne: function(table, newBurger, cb) {
    var queryString = "INSERT INTO ?? (burger_name, devoured) VALUES ( ?, 0);";
    connection.query(queryString, [table, newBurger], function(err, result) {
      if (err) throw err;
      console.log('inside insert orm')
      console.log(result);
      cb(result)
    });
  }
};

module.exports = orm;