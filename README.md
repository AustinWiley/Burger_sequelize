
# burger-sequelize
A Node, Express, Handlebars, and MySQL burger app that lets users input the names of burgers they'd like to eat... and then devour them!

Uses the Sequelize ORM rather than raw MySQL queries.

Try out the deployed app in Heroku, found [here](https://infinite-beyond-30054.herokuapp.com/)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
* Node.js
* NPM
```

### Installing

A step by step series of examples that tell you how to get a development env running

Clone the repo to your computer usingthe command line:

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


## Screenshots
`add gif here`

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
