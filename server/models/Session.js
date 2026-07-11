const mongoose = require('mongoose')

const sessionSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    }
},{
    timestamps:true
})
module.exports = mongoose.model('session',sessionSchema)