
const mongoose=require("mongoose");

const connection=(username,password)=>{
    return mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.76p3et0.mongodb.net/Bookstore`).then((result) => {
        console.log("data base connected sucessfully");
        
    }).catch((err) => {
        console.log(err);
        
    });
}

module.exports=connection