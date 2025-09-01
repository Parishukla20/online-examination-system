const mongoose = require('mongoose');
 const examineeSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
     email:{
        type:String,
        require:true
    },
     college:{
        type:String,
        require:true
    },
     course:{
        type:String,
        require:true
    },
    branch:{
        type:String,
        require:true
    },
     phone:{
        type:String,
        require:true
    },
    session:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'session',
        require:true
    },
    
    password:{
        type:String,
        require:true
    },
    
     status:{
        type:String,
        enum:["active","inactive","delete"],
        default:"inactive"
    }



 })
 module.exports = mongoose.model("Examinee",examineeSchema)