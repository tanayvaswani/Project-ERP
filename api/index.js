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
// Pass the db connection to the routes
const authRouter = require('./routes/auth')(db); 
const admissionFormRouter = require('./routes/admissionform')(db);
const recruitmentRoutes = require('./routes/recruitment')(db);

app.use('/api/auth', authRouter);
app.use("/api/admissionform", admissionFormRouter);
app.use('/api/recruitment', recruitmentRoutes);

app.listen(serverPort, () => {
  console.log(`Server is running on port: ${serverPort}`);
});