const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "erp",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MariaDB.");
    return;
  }
  console.log("Connected to MariaDB.");
});

module.exports = db;