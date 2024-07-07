const user = require("../model/user");
var jwt = require('jsonwebtoken');


const signup = async (req, res) => {
    const { username, email, password, address } = req.body;

    // Check if all required fields are provided
    if (!username || !email || !password || !address) {
        return res.json({
            success: false,
            message: "All fields are required",
        });
    }

    // Check username length
    if (username.length < 3) {
        return res.json({
            success: false,
            message: "Username length should be greater than 3",
        });
    }

    // Check if username already exists
    const existUserName = await user.findOne({ username });
    if (existUserName) {
        return res.json({
            success: false,
            message: "This username is already taken, please enter another name",
        });
    }

    // Check if email already exists
    const existEmail = await user.findOne({ email });
    if (existEmail) {
        return res.json({
            success: false,
            message: "This email already exists, please enter another email",
        });
    }
    //Check password length
    if(password.length<=5){
        return res.json({
            success: false,
            message: "password length grater than 5",
        });

    }

    // Create new user
    const newUser = new user({ username:username, email:email, password:password, address:address });
    await newUser.save();

    res.json({
        success: true,
        message: "User registered successfully",
        data:newUser
    });
};


//Login user

const LoginUser = (req, res) => {
    // Define the expiration time for the token, e.g., 1 hour
    // const expirationTime = '10h'; // You can also use other formats, like '1d' for one day, '10m' for ten minutes, etc.

    var token = jwt.sign(
        { 
            email: req.body.email,
            id: req.body.id,
 
            
            role: req.body.role 
        }, 
        process.env.JSON_TOKEN_KEY, 
        // { expiresIn: expirationTime }
    );

    res.json({
        success: true,
        message: "User logged in successfully",
        data: {
            id: req.body.id,
            role: req.body.role,
            token: token

        },
    });
};



//user information
const userInfo = async (req, res) => {
    const { id } = req.body;

    
    try {
        const data = await user.findById(id).select("-password");

        if (data) {
            res.json({
                success: true,
                data: data
            });
        } else {
            res.json({
                success: false,
                message: "User not found"
            });
        }
    } catch (error) {
        console.error("Error fetching user data:", error);
        res.json({
            success: false,
            message: "Something went wrong",
            error: error.message
        });
    }
};



module.exports = {
    signup,
    LoginUser,
    userInfo
};
