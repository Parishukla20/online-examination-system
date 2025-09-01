// const mongoose = require('mongoose');

// const subjectSchema = new mongoose.Schema({
//     name:{
//         type:String,
//         required:true
//     },
//     description:{
//         type:String,
//         required:true
//     }
// },{
//     timestamps:true
// })
// module.exports=mongoose.model('Subject',subjectSchema)









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