const User = require("../model/user")





const addCart = async (req, res) => {
    const { id } = req.body;
    const bookId = req.params.id;

    try {
        const userData = await User.findById(id);

        if (!userData) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        const isBookInCart = userData.cart.includes(bookId);

        if (isBookInCart) {
            return res.json({
                success: false,
                message: "Book already in cart"
            });
        }

        await User.findByIdAndUpdate(id, { $push: { cart: bookId } });

        return res.json({
            success: true,
            message: "Book added to cart successfully"
        });
    } catch (error) {
        console.error("Error adding book to cart:", error);
        return res.status(500).json({
            success: false,
            message: "An error occurred while adding the book to cart",
            error: error.message
        });
    }
};


//delete book from fev
const deleteBookfromCart = async (req, res) => {
    const { id } = req.body;
    const bookId = req.params.id;

    try {
        const userData = await User.findById(id);

        if (!userData) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        const isBookInCart = userData.cart.includes(bookId);

        if (!isBookInCart) {
            return res.json({
                success: false,
                message: "Book not found in cart"
            });
        }

        await User.findByIdAndUpdate(id, { $pull: { cart: bookId } });

        return res.json({
            success: true,
            message: "Book removed from cart successfully"
        });
    } catch (error) {
        console.error("Error removing book from cart:", error);
        return res.status(500).json({
            success: false,
            message: "An error occurred while removing the book from cart",
            error: error.message
        });
    }
};


//get fevbook of particular user

const getAllCartBooks = async (req, res) => {
    const { id } = req.body;

    try {
        const userData = await User.findById(id).populate("cart");

        if (!userData) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        const cartBooks = userData.cart.reverse();

        return res.json({
            success: true,
            message: "All favourite books",
            data: cartBooks
        });
    } catch (error) {
        console.error("Error fetching favourite books:", error);
        return res.status(500).json({
            success: false,
            message: "An error occurred while fetching favourite books",
            error: error.message
        });
    }
};
module.exports = {
    addCart,
    deleteBookfromCart,
    getAllCartBooks
    
    // Add other functions here as well
};
