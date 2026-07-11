const mongoose = require('mongoose')

const SubjectSchema = new mongoose.Schema({
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
module.exports = mongoose.model('Subject',SubjectSchema)