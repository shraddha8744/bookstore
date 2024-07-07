const express = require("express");
const app = express();
require("dotenv").config();
const connection = require("./database/Connection.js");
const router = require("./routes/user.js");
const userRouter = require("./routes/userAuth.js");
const adminRouter = require("./routes/book.js");
const fevRouter = require("./routes/fev.js");
const cartRouter = require("./routes/cart.js");
const cors=require("cors");
const orderRouter = require("./routes/order.js");
app.use(cors())

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

app.use(express.json());

// console.log("Attempting to connect to the database...");
connection(username, password);

// console.log("Setting up routes...");
app.use("/api", router);
app.use("/api", userRouter);
app.use("/api", adminRouter);
app.use("/api", fevRouter);
app.use("/api",cartRouter)
app.use("/api",orderRouter)




// Creating port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
