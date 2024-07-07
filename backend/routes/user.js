const express = require("express");
const { signup, LoginUser } = require("../controllers/userController");
const { encryptPassword, checkUser } = require("../middleware/encryptPassword");
const router = express.Router();

router.post("/signup",encryptPassword, signup);
router.post("/login", checkUser,LoginUser);


module.exports = router;
