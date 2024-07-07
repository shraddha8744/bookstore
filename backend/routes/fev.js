const express = require("express");
const { checkAuthorization } = require("../middleware/encryptPassword");
const { addFevBook, deleteBookfromFev, getAllFevBooks } = require("../controllers/fevBookController");

const fevRouter = express.Router();

// Use middleware function
fevRouter.use(checkAuthorization);

// Define protected route
fevRouter.put("/addfev/:id", addFevBook);
fevRouter.put("/deletebook/:id", deleteBookfromFev);
fevRouter.get("/allfevbooks", getAllFevBooks);



module.exports = fevRouter;
