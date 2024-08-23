# E-Commerce-BackEnd

## Table of content
[Description](#description)\
[Usage](#usage)\
[license](#license)\
[Installation](#installation)\
[Credits](#credits)\
[Questions](#questions)\

## Description
This back end uses node.js, and pgAdmin to create a backend server connecting to a postGresSQL database. The server code has the schema and seeding algorithms to start the database (Please see usage and installation). This back end is made for internet retail companies.  It stores products, tags, categories and product_tags information. This means that when you request a category, you get  that category and all products related to this category. When you request products, you receive the products and the tags and categories it belongs to. This backend excels in giving the client all the needed information using the latest server packages.

## Usage
To use this backend, you need node.js and pgAdmin4. To make sure you have them, please refer to the installation guide. Once the installation is complete, go to your pgAdmin shell and create the database, then run npm install inside the main repo. Then run npm run seed if you wish to have a pre seeded database. And finally, run node server.js. If these instructions are unclear, please view the following video: [SetupGuide](Setup-Format/Setup-Demo/setup-guide.mp4). To make sure you understand the format of each response and request, please view the following markdown file: [ResponseFormat](Setup-Format/Format/format.md);

## Installation
To use this backend, you need node.js and pgAdmin4. If you do not have node.js, please view this
download guide: https://nodejs.org/en/download/prebuilt-installer/current. If you do not have pgAdmin, please view the
download guide: https://coding-boot-camp.github.io/full-stack/postgresql/postgresql-installation-guide.
Then follow these instruction:

1- Clone this repository to your local machine

2- Go to the main repo
```Shell
    cd 'filepath'
```

3- Make sure all the Dependencies are installed using this command line argument
```Shell
    npm install
```

4- Setup your database by following this guide: [setupGuide](Setup-Format/Setup-Demo/setup-guide.mp4)

5- Either chose to pre seed your database like shown in the video using the following command or skip and go to step 6
```Shell
    npm run seed
```

6- Run the server
```Shell
    node server.js
```

## Credits
Credits to Xander Rapstine from coding bootcamp for the main setup of this backend

## License
Please refer to license in repo or badge area

## Badges
![MIT](https://img.shields.io/badge/license-MIT-blue)

## Questions
If you have any questions, email me at renaud_junior@outlook.com, or visit my github page at https://github.com/erickrenaud05

