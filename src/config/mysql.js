const mysql = require("mysql");

const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const pass = process.env.DB_PASS;
const db = process.env.DB_NAME;

const connection = mysql.createConnection({
  host: host,
  user: user,
  password: pass,
  database: db,
});

connection.connect((error) => {
  if (error) {
    console.log(error);
    throw error;
  }
  console.log("You are now connected ...");
});

module.exports = connection;
