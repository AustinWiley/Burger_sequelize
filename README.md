
# burger-sequelize
A Node, Express, Handlebars, and MySQL burger app that lets users input the names of burgers they'd like to eat... and then devour them!

Uses the Sequelize ORM rather than raw MySQL queries.

Try out the deployed app in Heroku, found [here](https://infinite-beyond-30054.herokuapp.com/)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them

```
* Node.js
* NPM
```

### Installing

A step by step series of examples that tell you how to get a development env running

Clone the repo to your computer using the command line:

```
git clone git@github.com:AustinWiley/Burger_sequelize.git
```

Use MySQL Workbench or HeidiSQL to create a database called:

```
burger_sequalize_d
```

Inside the `config` folder, open up the `connection.js` file and add your MySQL localhost password:

```
  var sequelize = new Sequelize('burger_sequalize_d', 'root', '<yourPassWordHere>', {
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
```

In your terminal, cd into the project folder and run:

```
npm install
```

Start a node server by running this in your terminal:

```
node server.js
```

Finally, navigating in your browser:

```
localhost:8080
```


## Screenshot
`add gif here`

## Built With

* [Heroku](https://heroku.com) - Cloud platform for deployment.
* [Express](https://www.npmjs.com/package/express) - Server framework.
* [sequelize](http://docs.sequelizejs.com/) -  Promise-based ORM for Node.js.
* [Express-handlebars](https://www.npmjs.com/package/express-handlebars) - A [Handlebars](https://www.npmjs.com/package/handlebars) view engine for Express. Used to generate dynamic HTML.
* [mysql2](https://www.npmjs.com/package/mysql2) - MySQL client for Node.js.
