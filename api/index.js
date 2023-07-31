const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");


// calling express & assigning a port to the server
const app = express();
const serverPort = 8081;
const db = require('./db');

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json(`Server is running on port ${serverPort}`);
});

// Routes
const authRouter = require('./routes/auth')(db); // Pass the db connection to auth.js
app.use('/api/auth', authRouter);

app.listen(serverPort, () => {
  console.log(`Server is running on port: ${serverPort}`);
});