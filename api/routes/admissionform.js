const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const fetchuser = require("../middleware/fetchuser");

// Initialize the router with the database connection
function init(db) {
    // Create a new admission form
    router.post(
        "/",
        fetchuser,
        [
            body("firstName", "Enter a valid first name").isLength({ min: 2 }),
            body("lastName", "Enter a valid last name").isLength({ min: 2 }),
            body("dateOfBirth", "Enter a valid date of birth").isDate(),
            body("gender", "Enter a valid gender").isLength({ min: 1 }),
            body("address", "Enter a valid address").isLength({ min: 5 }),
            body("city", "Enter a valid city").isLength({ min: 2 }),
            body("state", "Enter a valid state").isLength({ min: 2 }),
            body("zipCode", "Enter a valid zip code").isLength({ min: 5 }),
            body("phone", "Enter a valid phone number").isLength({ min: 10 }),
            body("email", "Enter a valid email").isEmail(),
            body("fatherName", "Enter a valid father's name").isLength({ min: 2 }),
            body("fatherOccupation", "Enter a valid father's occupation").isLength({ min: 2 }),
            body("motherName", "Enter a valid mother's name").isLength({ min: 2 }),
            body("motherOccupation", "Enter a valid mother's occupation").isLength({ min: 2 }),
            body("qualification", "Enter a valid qualification").isLength({ min: 2 }),
            body("schoolName", "Enter a valid school name").isLength({ min: 2 }),
            body("boardName", "Enter a valid board name").isLength({ min: 2 }),
            body("percentage", "Enter a valid percentage").isNumeric(),
            body("achievements", "Enter valid achievements").isLength({ min: 2 }),
            body("registrationFee", "Enter valid registration fee details").isLength({ min: 2 }),
        ],
        async (req, res) => {
            try {
                // Extract form data from the request body
                const {
                    firstName,
                    lastName,
                    dateOfBirth,
                    gender,
                    address,
                    city,
                    state,
                    zipCode,
                    phone,
                    email,
                    fatherName,
                    fatherOccupation,
                    motherName,
                    motherOccupation,
                    qualification,
                    schoolName,
                    boardName,
                    percentage,
                    achievements,
                    registrationFee,
                    // Add other form fields here
                } = req.body;

                // If there are errors, return bad request and errors
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    return res.status(400).json({ errors: errors.array() });
                }

                // Handle form data submission to the database
                const sql =
                    "INSERT INTO admission_forms (`firstName`, `lastName`, `dateOfBirth`, `gender`, `address`, `city`, `state`, `zipCode`, `phone`, `email`, `fatherName`, `fatherOccupation`, `motherName`, `motherOccupation`, `qualification`, `schoolName`, `boardName`, `percentage`, `achievements`, `registrationFee`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
                const values = [
                    firstName,
                    lastName,
                    dateOfBirth,
                    gender,
                    address,
                    city,
                    state,
                    zipCode,
                    phone,
                    email,
                    fatherName,
                    fatherOccupation,
                    motherName,
                    motherOccupation,
                    qualification,
                    schoolName,
                    boardName,
                    percentage,
                    achievements,
                    registrationFee,
                    // Add other form fields here
                ];

                db.query(sql, values, (err, result) => {
                    if (err) {
                        return res.status(500).json({ error: "Database error" });
                    }
                    return res.json({ message: "Form submitted successfully" });
                });
            } catch (error) {
                console.error("Error:", error.message);
                res.status(500).json({ error: "Server error" });
            }
        }
    );


    // Add other routes and operations as needed...

    return router;
}

module.exports = init;
