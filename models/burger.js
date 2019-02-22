const Sequelize = require('sequelize');
const sequelize = require('../config/connection.js')
//-----------------------------------------------
console.log('berger models')
const Burger = sequelize.define('da_burger', {
  burger_name: {
    type: Sequelize.STRING
  },
  devoured: {
    type: Sequelize.BOOLEAN
  }
});

Burger.sync();

module.exports = Burger;
