const order = require("../model/order");
const user = require("../model/user");



const orderDetails=async(req,res)=>{
    try {
        const {id,Order}=req.body
        for(const orderData of Order){
            const neworder=new order({user:id,book:orderData._id})
            const orderDatFromDb=await neworder.save()

            //saving order in user model

            await user.findByIdAndUpdate(id,{
                $push:{orders:orderDatFromDb._id}
            })

            //clearing cart
            await user.findByIdAndUpdate(id,{
                $pull:{cart:orderData._id}
            })
        }
        return res.json({
            success:true,
            messsage:"order placed successfully"
        })

        
    } catch (error) {
        console.log(error);
    }
}

const orderHistory=async(req,res)=>{
    try {
        const {id}=req.body
        const userdata=await user.findById(id).populate({
            path:"orders",
            populate:{path:"book"}
        })
        const orderData=userdata.orders.reverse();
        return res.json({
            success:true,
            data:orderData
        })
        
    } catch (error) {
        console.log(error);
    }

}
//getall order

const getAllOrder=async(req,res)=>{
    try {
        const userData=await order.find().populate({
            path:"book"
        }).populate({
            path:"user"
        }).sort({createdAt:-1})
        return res.json({
            success:true,
            data:userData
        })
        
    } catch (error) {
        console.log(error);

        
    }

}
//update order
const upadateOrder=async(req,res)=>{
    try {
        const id=req.params.id;
        await order.findByIdAndUpdate(id,{status:req.body.status})
        return res.json({
            success:true,
            message:"status updated successfully"
        })
        
    } catch (error) {
        console.log(error);
    }

}   
module.exports={
    orderDetails,
    orderHistory,
    getAllOrder,
    upadateOrder
}