const express = require("express");
const { checkAuthorization } = require("../middleware/encryptPassword");
const { addCart, deleteBookfromCart, getAllCartBooks } = require("../controllers/cartController");

const cartRouter = express.Router();

// Use middleware function
cartRouter.use(checkAuthorization);

// Define protected route
cartRouter.put("/addcart/:id", addCart);
cartRouter.put("/deletecart/:id", deleteBookfromCart);
cartRouter.get("/allcart", getAllCartBooks);



module.exports = cartRouter;
