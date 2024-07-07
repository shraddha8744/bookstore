const express = require("express");
const { userInfo } = require("../controllers/userController");
const { checkAuthorization } = require("../middleware/encryptPassword");

const userRouter = express.Router();

// Use middleware function
userRouter.use(checkAuthorization);

// Define protected route
userRouter.get("/userinfo", userInfo);

module.exports = userRouter;
