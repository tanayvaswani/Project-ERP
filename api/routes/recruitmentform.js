const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'application/pdf') {
    cb(null, true);
  } else {
    cb(new Error('Invalid file format. Only PDF files are allowed.'), false);
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

// database connection and any other required middleware
const db = require('../path/to/db/connection');
const fetchuser = require('../middleware/fetchuser');

//POST route for employee recruitment form submission
router.post('/', fetchuser, upload.single('resume'), async (req, res) => {
  const {
    firstName,
    lastName,
    dateOfBirth,
    gender,
    email,
    phone,
    address,
    city,
    state,
    zipCode,
    linkedInProfile,
    portfolioWebsite,
    fatherName,
    motherName,
    education,
    specialization,
    passingYear,
    skills,
    experience,
    achievements,
  } = req.body;

  const resumePath = req.file.path;

  try {
    //  database operations using the 'db' connection
    const sql =
      'INSERT INTO employee_recruitment_forms (firstName, lastName, dateOfBirth, gender, email, phone, address, city, state, zipCode, linkedInProfile, portfolioWebsite, fatherName, motherName, education, specialization, passingYear, skills, experience, achievements, resumePath) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [
      firstName,
      lastName,
      dateOfBirth,
      gender,
      email,
      phone,
      address,
      city,
      state,
      zipCode,
      linkedInProfile,
      portfolioWebsite,
      fatherName,
      motherName,
      education,
      specialization,
      passingYear,
      skills,
      experience,
      achievements,
      resumePath,
    ];

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error:', err.message);
        return res.status(500).json({ error: 'Database error' });
      }

      return res.json({ message: 'Form submitted successfully' });
    });
  } catch (error) {
    console.error('Error:', error.message);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
