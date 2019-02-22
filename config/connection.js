const Sequelize = require('sequelize');

if (process.env.JAWSDB_URL) {

  // var sequelize = new Sequelize(process.env.JAWSDB_URL);
  var sequelize = new Sequelize('iz6gd16bn9rgtl97', 'i5nt37zz6f4tch7y', 'p5glsnqv1cexpkzb', {
    host: 'jsftj8ez0cevjz8v.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 3306,
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });
} else {

  var sequelize = new Sequelize('burger_sequalize_d', 'root', 'root', {
    host: 'localhost',
    port: 8889,
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });
}

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Or you can simply use a connection uri
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');

module.exports = sequelize;