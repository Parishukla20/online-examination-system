const mongoose = require('mongoose');
const adminSchema=new mongoose.Schema({
    name:{
        type:String,// ye object model provide karta hai
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    }
}, 
{
 timestamps:true,  //It gives me all date and date of update
}

)
 module.exports = mongoose.model("Admin",adminSchema) 