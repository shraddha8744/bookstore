const express = require("express");
const { checkAuthorization } = require("../middleware/encryptPassword");
const { saveBook, updateBook, deleteBook, getAllBooks, getFourBooks, getBookById } = require("../controllers/booksController");

const adminRouter = express.Router();

// Routes that don't require authorization
adminRouter.get("/allbook", getAllBooks);
adminRouter.get("/fourbook", getFourBooks);

// Routes that require authorization
adminRouter.post("/addbook", checkAuthorization, saveBook);
adminRouter.put("/update/:id", checkAuthorization, updateBook);
adminRouter.delete("/delete/:id", checkAuthorization, deleteBook);
adminRouter.get("/book/:id", checkAuthorization, getBookById);

module.exports = adminRouter;
