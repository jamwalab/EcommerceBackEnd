# E-COMMERECE BACK END
## Version 1.0
## Description
This program manages the back end of an online retail store, helping keep track of products, organizing them under different categories and tags. User can search for the products in the database and can also add new products, categories and tags

## Table of Contents
* [License](#license)
* [Installation](#installation)
* [Test](#test)
* [Usage](#usage)
* [Credits](#credits)

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Installation
* To install this app you need to have node installed in your system. 
* Once installed you can clone the repository using the link _https://github.com/jamwalab/teamProfileGenerator.git_.
* Once the repository is cloned, using bash terminal, move to the app repository. 
* Once there install the required npm modules suing the command _"npm install"_. 
* Login to your local MySQL database and run _"source db/schema.sql"_ to create the database. 
* You have the option to seed the database by running _"npm start seed"_. You can add seeds in the [seed folder](./seeds).
* Once everything is setup, run the app using the command _"npm start"_. 


## Test
Testing options are not available at the moment

## Usage
To run this app type _"npm start"_. Once the server is running you can use tools like Postman or Insomnia to send api queries to the server. Below are the api queries that can be sent to the app.

GET commands:
* /api/categories
* /api/categories/id
* /api/products
* /api/products/id
* /api/tags
* /api/tags/id

POST commands:
* /api/categories
* /api/products
* /api/tags

PUT commands:
* /api/categories
* /api/products
* /api/tags

DELETE commands:
* /api/categories
* /api/products
* /api/tags

A detailed run through of the app can be found in the below videos:
* [Link to Video - Part 1](https://www.youtube.com/watch?v=zHp2FxyoctY)
* [Link to Video - Part 2](https://www.youtube.com/watch?v=f9oaiUEURQ0)

## Credits
#### NPM Modules
* [dotenv](https://www.npmjs.com/package/dotenv)
* [express](https://www.npmjs.com/package/express)
* [mysql2](https://www.npmjs.com/package/mysql2)
* [sequelize](https://www.npmjs.com/package/sequelize)

#### Users
* Abhishek Jamwal - [GitHub](https://github.com/jamwalab)