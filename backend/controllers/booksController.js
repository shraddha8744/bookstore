const Book = require("../model/book");
const User = require("../model/user");

const saveBook = async (req, res) => {
    const { id, url, title, author, price, desc, language } = req.body;

    // Validate required fields
    if (!url || !title || !author || !price || !desc || !language) {
        return res.status(400).json({
            success: false,
            message: "All fields are required",
            error: {
                url: "url is required",
                title: "title is required",
                author: "author is required",
                price: "price is required",
                desc: "desc is required",
                language: "language is required"
            }
        });
    }

    try {
        const userData = await User.findById(id);
        
        if (!userData) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        if (userData.role !== "admin") {
            return res.status(403).json({
                success: false,
                message: "You are not an admin"
            });
        }

        const bookData = new Book({
            url,
            title,
            author,
            price,
            desc,
            language
        });

        await bookData.save();

        res.json({
            success: true,
            message: "Book added successfully"
        });
    } catch (error) {
        console.error("Error saving book:", error);
        res.status(500).json({
            success: false,
            message: "An error occurred while adding the book",
            error: error.message
        });
    }
};

const updateBook = async (req, res) => {
    const bookId = req.params.id;
    const {  url, title, author, price, desc, language } = req.body;

    try {
       

        const updatedBook = await Book.findByIdAndUpdate(
            bookId,
            {
                url,
                title,
                author,
                price,
                desc,
                language
            },
            { new: true, runValidators: true }
        );

        if (!updatedBook) {
            return res.status(404).json({
                success: false,
                message: "Book not found"
            });
        }

        res.json({
            success: true,
            message: "Book updated successfully",
            data: updatedBook
        });
    } catch (error) {
        console.error("Error updating book:", error);
        res.status(500).json({
            success: false,
            message: "An error occurred while updating the book",
            error: error.message
        });
    }
};



const deleteBook = async (req, res) => {
    const bookId = req.params.id;

    try {
        const data = await Book.findByIdAndDelete(bookId);

        if (data) {
            res.json({
                success: true,
                message: "Book deleted successfully"
            });
        } else {
            res.json({
                success: false,
                message: "Book not found"
            });
        }
    } catch (error) {
        console.error("Error deleting book:", error);
        res.status(500).json({
            success: false,
            message: "An error occurred while deleting the book",
            error: error.message
        });
    }
};

const getAllBooks = async (req, res) => {
    try {
        let books = await Book.find({});
        if (books.length > 0) {
            res.json({
                success: true,
                message: "All books retrieved successfully",
                data: books
            });
        } else {
            res.json({
                success: false,
                message: "No books found"
            });
        }
    } catch (error) {
        console.error("Error fetching books:", error);
        res.status(500).json({
            success: false,
            message: "An error occurred while fetching books",
            error: error.message
        });
    }
};

const getFourBooks = async (req, res) => {
    try {
        let books = await Book.find({}).limit(4);
        if (books.length > 0) {
            res.json({
                success: true,
                message: "Four books retrieved successfully",
                data: books
            });
        } else {
            res.json({
                success: false,
                message: "No books found"
            });
        }
    } catch (error) {
        console.error("Error fetching books:", error);
        res.status(500).json({
            success: false,
            message: "An error occurred while fetching books",
            error: error.message
        });
    }
};


const getBookById = async (req, res) => {
    const id = req.params.id;
    try {
        let data = await Book.findById(id);
        if (data) {
            res.json({
                success: true,
                message: "Book found successfully",
                data: data
            });
        } else {
            res.json({
                success: false,
                message: "Book not found"
            });
        }
    } catch (error) {
        console.error("Error finding book by ID:", error);
        res.status(500).json({
            success: false,
            message: "An error occurred while fetching the book",
            error: error.message
        });
    }
}

module.exports = {
    saveBook,
    updateBook,
    deleteBook,
    getAllBooks,
    getFourBooks,
    getBookById
};
