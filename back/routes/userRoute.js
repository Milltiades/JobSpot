const express = require("express");

// controller functions
const {
  loginUser,
  signupUser,
  getSingleUser,
  getUsers,
} = require("../controllers/userController");

const router = express.Router();

// login route
router.post("/login", loginUser);

// signup route
router.post("/signup", signupUser);

// get all users
router.get("/users", getUsers);

// get a single user
router.get("/:id", getSingleUser);

module.exports = router;
