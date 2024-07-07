const mongoose=require("mongoose")
const user=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true

    },
    password:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    avatar:{
        type:String,
        default:"C:\Users\Soft\Pictures\Camera Roll\WIN_20230726_21_27_03_Pro.jpg"
    },
    role:{
        type:String,
        default:"user",
        enum:["user","admin"]

    },
    favourites:[{
        type:mongoose.Types.ObjectId,
        ref:"book"
    }],
    cart:[{
        type:mongoose.Types.ObjectId,
        ref:"book"
    }],
    orders:[{
        type:mongoose.Types.ObjectId,
        ref:"order"
    }],


},
{timeStamps:true})

module.exports=mongoose.model("user",user)