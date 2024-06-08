# MVC Blog
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## Table of Contents
- [MVC Blog](#mvc-blog)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Installation](#installation)
  - [Use](#use)
  - [Credits](#credits)
  - [Screenshots](#screenshots)
  - [URL for deployed application](#url-for-deployed-application)

## Description
A CMS-style blog site following the MVC paradigm in it's architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.
## Installation
Install Node.js, if needed.

Create a .gitignore file and include "node_modules", ".env", ".vscode", "package-lock.json", and ".DS_Store" in it, so that these files aren't tracked or uploaded to GitHub. Be sure to create your .gitignore file before installing any npm dependencies.

Make sure that your repo includes a package.json with the required dependencies. You can create one by running "npm init" when you first set up the project, before installing any dependencies.

Install the following dependencies: 
npm i express-handlebars
npm i mysql2
npm i sequelize
npm i dotenv
npm i bcrypt
npm i express-session
npm i connect-session-sequelize
npm i express
## Use
Right-click on the "server.js" file and select "Open in Integrated Terminal". Type "mysql -u root -p" and press enter. Enter MySQL password and press enter. Type "source db/schema.sql" and press enter. Type "exit" and press enter. Type "npm run seed" and press enter. To initiate application, type "node server.js" and press enter.
## Credits
The Winged Coders and Chatgpt
## Screenshots
![Homepage](public\assets\images\Screenshot 2024-06-08 154504.png)
![Login](public\assets\images\Screenshot 2024-06-08 154519.png)
![SignUp](public\assets\images\Screenshot 2024-06-08 154536.png)
![Dashboard](public\assets\images\Screenshot 2024-06-08 154628.png)
![Comments](public\assets\images\Screenshot 2024-06-08 154721.png)
## URL for deployed application

