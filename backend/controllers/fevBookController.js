const User = require("../model/user")




const addFevBook = async (req, res) => {
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

        const isBookInFevourite = userData.favourites.includes(bookId);

        if (isBookInFevourite) {
            return res.json({
                success: false,
                message: "Book already in favourites"
            });
        }

        await User.findByIdAndUpdate(id, { $push: { favourites: bookId } });

        res.json({
            success: true,
            message: "Book added to favourites successfully"
        });
    } catch (error) {
        console.error("Error adding book to favourites:", error);
        res.status(500).json({
            success: false,
            message: "An error occurred while adding the book to favourites",
            error: error.message
        });
    }
};


//delete book from fev
const deleteBookfromFev = async (req, res) => {
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
  
      const isBookInFevourite = userData.favourites.includes(bookId);
  
      if (isBookInFevourite) {
        await User.findByIdAndUpdate(id, { $pull: { favourites: bookId } });
  
        return res.json({
          success: true,
          message: "Book removed from favourites"
        });
      }
  
      // If the book is not in favourites, send a response indicating the book was not found in favourites
      return res.json({
        success: false,
        message: "Book not found in favourites"
      });
    } catch (error) {
      console.error("Error removing book from favourites:", error);
      return res.status(500).json({
        success: false,
        message: "An error occurred while removing the book from favourites",
        error: error.message
      });
    }
  };
  

//get fevbook of particular user

const getAllFevBooks = async (req, res) => {
    const { id } = req.body;

    try {
        const userData = await User.findById(id).populate("favourites");

        if (!userData) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        const fevBooks = userData.favourites;

        return res.json({
            success: true,
            message: "All favourite books",
            data: fevBooks
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
    addFevBook,
    deleteBookfromFev,
    getAllFevBooks
    // Add other functions here as well
};
