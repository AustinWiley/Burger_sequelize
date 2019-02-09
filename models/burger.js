const Sequelize = require('sequelize');
const sequelize = require('../config/connection.js')
//-----------------------------------------------
const Burger = sequelize.define('burger', {
  burger_name: {
    type: Sequelize.STRING
  },
  devoured: {
    type: Sequelize.BOOLEAN
  }
});

Burger.sync();

module.exports = Burger;
