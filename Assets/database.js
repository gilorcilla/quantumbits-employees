const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "%VmGil4801!",
  database: "quantumbits_tracker",
});

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;
