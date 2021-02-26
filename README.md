<h1 align="center">ExpressJS - Telegram RESTfull API</h1>

<p align="center">
    <a href="https://github.com/riskyamaliaharis/BE-Telegram/issues">Report Bug</a>
    ·
    <a href="https://github.com/riskyamaliaharis/BE-Telegram/issues">Request Feature</a>
  </p>

## About This Project

This app called Telegram. It is not a rival of telegram of course, but just a simple project imitating concept of some chat applications like Telegram. Real time chat of this application is using Socket-io (in Backend) and socket.io-client(in Frontend). Showing Location is using API of Google Map. This project consists of 12 HTTP Requests. You can access it by the link below (in requirements part).

## Built With

[![Express.js](https://img.shields.io/badge/Express.js-4.x-orange.svg?style=rounded-square)](https://expressjs.com/en/starter/installing.html)
[![Node.js](https://img.shields.io/badge/Node.js-v.12.13-green.svg?style=rounded-square)](https://nodejs.org/)

## Requirements

1. <a href="https://nodejs.org/en/download/">Node Js</a>
2. Node_modules
3. <a href="https://www.getpostman.com/">Postman</a>
4. Web Server (ex. localhost)

## How to run the app ?

1. Open app's directory in CMD or Terminal
2. Type `npm install`
3. Make new file a called **.env**, set up first [here](#set-up-env-file)
4. Turn on Web Server and MySQL can using Third-party tool like xampp, etc.
5. Create a database with the name #nama_database, and Import file sql to **phpmyadmin**
6. Open Postman desktop application or Chrome web app extension that has installed before
7. Choose HTTP Method and enter request url.(ex. localhost:3000/)
8. You can see all the end point [here](https://documenter.getpostman.com/view/13454431/TW6uq9TJ)

## Set up .env file

Open .env file on your favorite code editor, and copy paste this code below :

```
DB_HOST=localhost
DB_USER=root
DB_PASS=
DB_NAME=chat
PORT=3001
```

## License

© [Risky Amalia Haris](https://github.com/riskyamaliaharis/)
