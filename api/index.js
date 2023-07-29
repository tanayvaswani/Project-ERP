const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const salt = 10;

// calling express & assigning a port to the server
const app = express();
const serverPort = 8081;

// turn data into json format
app.use(express.json());

// CORS for authentication
app.use(cors());

// For generating cookies
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json(`Server is running on port ${serverPort}`);
});

// Creating connection with Database
const db = mysql.createConnection({
  host: "localhost:5173",
  user: "root",
  password: "",
  database: "erp",
});

app.post("/register", (req, res) => {
  const sql = "INSERT INTO users(`firstname`, `lastname`, `username`, `password`, `email`, `course`, `contact`) VALUES (?)";
  bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
    if (err) return res.json({ Error: `Error while hashing password` });
    const values = [
      req.body.firstname,
      req.body.lastname,
      req.body.username,
      hash,
      req.body.email,
      req.body.course,
      req.body.contact,
    ];
    db.query(sql, [values], (err, result) => {
      if (err) return res.json({ Error: `Inserting data error!` });
      return res.json({ Status: `Success` });
    });
  });
});

app.listen(serverPort, () => {
  console.log(`Server is running on port: ${serverPort}`);
});
