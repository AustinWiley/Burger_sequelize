const Sequelize = require('sequelize');

if (process.env.JAWSDB_URL) {

  // var sequelize = new Sequelize(process.env.JAWSDB_URL);
  var sequelize = new Sequelize('rah0l7bw3voajzgg', 'nlky5nfq0vv5qado', 'zgnibx7qpdbwoht1', {
    host: 'ryvdxs57afyjk41z.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
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