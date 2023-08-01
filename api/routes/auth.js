const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require("express-validator");

require('dotenv').config(); // Load environment variables from .env file

// Initialize the router with the database connection
function init(db) {

  const saltRounds = 10;
  // Route 1: Create a user using POST "/api/auth/register"
  router.post(
    "/register",
    [
      body("firstname").notEmpty(),
      body("lastname").notEmpty(),
      body("username").notEmpty(),
      body("password").isLength({ min: 4 }),
      body("email").isEmail(),
      body("course").notEmpty(),
      body("contact").notEmpty(),
    ],
    (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const {
        firstname,
        lastname,
        username,
        password,
        email,
        course,
        contact,
      } = req.body;

      bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) return res.json({ Error: "Error while hashing password" });

        const sql =
          "INSERT INTO users(`firstname`, `lastname`, `username`, `password`, `email`, `course`, `contact`) VALUES (?, ?, ?, ?, ?, ?, ?)";
        const values = [firstname, lastname, username, hash, email, course, contact];

        db.query(sql, values, (err, result) => {
          if (err) return res.json({ Error: "Inserting data error!" });
          return res.json({ Status: "Success" });
        });
      }) ;
    }
  );

  // Route 2: Authenticate a User POST: "/api/auth/login"
  router.post(
    "/login",
    [
      body("credential").notEmpty(),
      body("password").notEmpty(),
    ],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { credential, password } = req.body;

      const sql = "SELECT * FROM users WHERE `username` = ? OR `email` = ?";
      db.query(sql, [credential, credential],async (err, results) => {
        if (err) {
          return res.status(500).json({ Error: "Database query error" });
        }

        if (results.length === 0) {
          return res.status(400).json({ Error: "Invalid Credentials length" });
        }

        const user = results[0];

        try {
          const isMatch = await bcrypt.compare(password, user.password);
          if (!isMatch) {
            return res.status(400).json({ Error: "Invalid Credentials unmatched" });
          }

          const payload = {
            user: {
              id: user.id,
            },
          };
          const authtoken = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
          res.json({ authtoken });
        } catch (err) {
          return res.status(500).json({ Error: "Error while comparing password" });
        }

      });
    }
  );


  //Route:3  Route to get user details
  router.get("/user", fetchuser, async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select('-password');
      res.json({ user });
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Internal Server Error.');
    }
  });

  return router;
}
module.exports = init;