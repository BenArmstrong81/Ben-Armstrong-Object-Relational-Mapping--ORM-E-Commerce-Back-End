# Ben-Armstrong-Object-Relational-Mapping--ORM-E-Commerce-Back-End

## Your Task

Internet retail, also known as **e-commerce**, is the largest sector of the electronics industry, generating an estimated $29 trillion in 2019. E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. Due to their prevalence, understanding the fundamental architecture of these platforms will benefit you as a full-stack web developer.

Your task is to build the back end for an e-commerce site by modifying starter code. You’ll configure a working Express.js API to use Sequelize to interact with a MySQL database.

Because this application won’t be deployed, you’ll also need to provide a link to a walkthrough video that demonstrates its functionality and all of the acceptance criteria being met. You’ll need to submit a link to the video and add it to the readme of your project.

## User Story
```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria
```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

## Mock-Up
The following animation shows the application's GET routes to return all categories, all products, and all tags being tested in Insomnia:
![In Insomnia, the user tests “GET tags,” “GET Categories,” and “GET All Products.”.](./Assets/13-orm-homework-demo-01.gif)
The following animation shows the application's GET routes to return a single category, a single product, and a single tag being tested in Insomnia:
![In Insomnia, the user tests “GET tag by id,” “GET Category by ID,” and “GET One Product.”](./Assets/13-orm-homework-demo-02.gif)
The following animation shows the application's POST, PUT, and DELETE routes for categories being tested in Insomnia:
![In Insomnia, the user tests “DELETE Category by ID,” “CREATE Category,” and “UPDATE Category.”](./Assets/13-orm-homework-demo-03.gif)
Your walkthrough video should also show the POST, PUT, and DELETE routes for products and tags being tested in Insomnia.

## Getting Started
This Challenge will require a video submission. Refer to the [Fullstack Blog Video Submission Guide](https://coding-boot-camp.github.io/full-stack/computer-literacy/video-submission-guide) for additional guidance on creating a video.

You’ll need to use the [MySQL2](https://www.npmjs.com/package/mysql2) and [Sequelize](https://www.npmjs.com/package/sequelize) packages to connect your Express.js API to a MySQL database and the [dotenv](https://www.npmjs.com/package/dotenv) package to use environment variables to store sensitive data.

Use the `schema.sql` file in the `db` folder to create your database with MySQL shell commands. Use environment variables to store sensitive data like your MySQL username, password, and database name.

### Database Models
Your database should contain the following four models, including the requirements listed for each model:
* `Category`
  * `id`
    * Integer.
    * Doesn't allow null values.
    * Set as primary key.
    * Uses auto increment.
  * `category_name`
    * String.
    * Doesn't allow null values.
* `Product`
  * `id`
    * Integer.
    * Doesn't allow null values.
    * Set as primary key.
    * Uses auto increment.
  * `product_name`
    * String.
    * Doesn't allow null values.
  * `price`
    * Decimal.
    * Doesn't allow null values.
    * Validates that the value is a decimal.
  * `stock`
    * Integer.
    * Doesn't allow null values.
    * Set a default value of `10`.
    * Validates that the value is numeric.
  * `category_id`
    * Integer.
    * References the `Category` model's `id`.
* `Tag`
  * `id`
    * Integer.
    * Doesn't allow null values.  
    * Set as primary key.
    * Uses auto increment.
  * `tag_name`
    * String.
* `ProductTag`
  * `id`
    * Integer.
    * Doesn't allow null values.
    * Set as primary key.
    * Uses auto increment.
  * `product_id`
    * Integer.
    * References the `Product` model's `id`.
  * `tag_id`
    * Integer.
    * References the `Tag` model's `id`.

### Associations

You'll need to execute association methods on your Sequelize models to create the following relationships between them:

* `Product` belongs to `Category`, and `Category` has many `Product` models, as a category can have multiple products but a product can only belong to one category.

* `Product` belongs to many `Tag` models, and `Tag` belongs to many `Product` models. Allow products to have multiple tags and tags to have many products by using the `ProductTag` through model.

> **Hint:** Make sure you set up foreign key relationships that match the column we created in the respective models.

### Fill Out the API Routes to Perform RESTful CRUD Operations

Fill out the unfinished routes in `product-routes.js`, `tag-routes.js`, and `category-routes.js` to perform create, read, update, and delete operations using your Sequelize models.

Note that the functionality for creating the many-to-many relationship for products has already been completed for you.

> **Hint**: Be sure to look at the mini-project code for syntax help and use your model's column definitions to figure out what `req.body` will be for POST and PUT routes!

### Seed the Database
After creating the models and routes, run `npm run seed` to seed data to your database so that you can test your routes.

### Sync Sequelize to the Database on Server Start
Create the code needed in `server.js` to sync the Sequelize models to the MySQL database on server start.

## Grading Requirements
* The GitHub repository containing your application code.
* A walkthrough video that demonstrates the functionality of the e-commerce back end must be submitted, and a link to the video should be included in your readme file.
* The walkthrough video must show all of the technical acceptance criteria being met.
* The walkthrough video must demonstrate how to create the schema from the MySQL shell.
* The walkthrough video must demonstrate how to seed the database from the command line.
* The walkthrough video must demonstrate how to start the application’s server.
* The walkthrough video must demonstrate GET routes for all categories, all products, and all tags being tested in Insomnia.
* The walkthrough video must demonstrate GET routes for a single category, a single product, and a single tag being tested in Insomnia.
* The walkthrough video must demonstrate POST, PUT, and DELETE routes for categories, products, and tags being tested in Insomnia.
* Satisfies all of the preceding acceptance criteria plus the following:
  * Connects to a MySQL database using the [MySQL2](https://www.npmjs.com/package/mysql) and [Sequelize](https://www.npmjs.com/package/sequelize) packages.
  * Stores sensitive data, like a user’s MySQL username, password, and database name, using environment variables through the [dotenv](https://www.npmjs.com/package/dotenv) package.
  * Syncs Sequelize models to a MySQL database on the server start.
  * Includes column definitions for all four models outlined in the Challenge instructions.
  * Includes model associations outlined in the Challenge instructions.
* Repository has a unique name.
* Repository follows best practices for file structure and naming conventions.
* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.
* Repository contains multiple descriptive commit messages.
* Repository contains quality readme with description and a link to a walkthrough video.

You are required to submit BOTH of the following for review:
* A walkthrough video demonstrating the functionality of the application and all of the acceptance criteria being met.
* The URL of the GitHub repository. Give the repository a unique name and include a readme describing the project.

## Made With

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

## What I Learned
Extending on from the last 3 weeks which included; Insomnia, Heroku, Node.js, MySQL we built upon by by learning about Object-Relational Mapping (ORM). We touched up on Models, CRUD, Async, Hooks, 1to1 and 1toMany, Literals all while using Sequelize (the ORM) just to name a few subjects. 

## What Problems Did we Solve?
We started with a a good portion of starter code this week which was nice (on the back of last weeks crazy full stack development).  

# Installation
N/A - if you do clone this repo to your machine please do not forget to create your own .env file.

# Usage
To view this challenge you can view the walk through video here: https://intense-hollows-44171.herokuapp.com/
<br/>Or check out my repository here: https://github.com/BenArmstrong81/-Ben-Armstrong-Note-Taker-UsingExpress.js

The following image's shows the working application:

![My Web Development Portfolio webpage includes a navigation bar, a professional head shot image, multiple links (placeholders at this stage) to projects completed within the UniSA Full Stack Web Development course, and working links to contact me - even download an updated resume.](./Assets/BenArmstrong-WorkingNoteTaker.png)

# Credits
With special thanks to the UniSA Full Stack Web Development Class.

# License

Please refer to the LICENSE in the repo.
