const { orderDetails, orderHistory, getAllOrder, upadateOrder } = require("../controllers/orderController")
const { checkAuthorization } = require("../middleware/encryptPassword")

const orderRouter=require("express").Router()

orderRouter.post("/placeorder",checkAuthorization,orderDetails)
orderRouter.get("/orderhistory",checkAuthorization,orderHistory)
orderRouter.get("/allorder",checkAuthorization,getAllOrder)
orderRouter.put("/updateorder",checkAuthorization,upadateOrder)



module.exports=orderRouter