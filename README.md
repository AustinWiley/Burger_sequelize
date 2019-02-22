
# Burger-sequelize
### Eat Da Burger!!!
A Node, Express, Handlebars, and MySQL burger app that lets users input the names of burgers they'd like to eat... and then devour them!

Try out the deployed app in Heroku, found [here](https://infinite-beyond-30054.herokuapp.com/)

## Functionality
Using the Sequelize ORM rather than raw MySQL queries, the app has 3 basic CRUD functions...

* READ all entries from the MySQL database and display them to the DOM using Handlebars.

* UPDATE a selected burger by clicking on the burger name button, which... * hits a /put route in Express to change its "devoured" status in the MySQL database (via Sequelize ORM) * re-routes the webpage back to the index, where the burger is now in the devoured column (via Handlebars)

* CREATE a new burger using the "Add A New Burger" form, which... * hits a /post route in Express to insert a new burger into the MySQL database (via Sequelize ORM) * re-routes the webpage back to the index, where the burger is now ready to be eaten column (via Handlebars)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them

```
* Node.js
* NPM
```

### Installing

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


## Demo
![alt text](http://url/to/img.png)


## Built With

* [Heroku](https://heroku.com) - Cloud platform for deployment.
* [Express](https://www.npmjs.com/package/express) - Server framework.
* [sequelize](http://docs.sequelizejs.com/) -  Promise-based ORM for Node.js.
* [Express-handlebars](https://www.npmjs.com/package/express-handlebars) - A [Handlebars](https://www.npmjs.com/package/handlebars) view engine for Express. Used to generate dynamic HTML.
* [mysql2](https://www.npmjs.com/package/mysql2) - MySQL client for Node.js.
