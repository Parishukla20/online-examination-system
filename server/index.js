const express = require('express');  // it work like a waiter
const cors= require('cors');         //data can be fetched from backend to frontend and vice_versa
const mongoose=require('mongoose');// ” It is specifically used to connect and interact with MongoDB database.
const app=express();  //express function start
require("dotenv").config();


app.use(cors()); //ye data ko backend aur frontend me aane jaane deta hai
app.use(express.json());

const URL = process.env.MONGO_URI;
//console.log("server updated version2");
mongoose.connect(URL)
    .then(()=>{  //ye is liye hai ki future me connect hoga to print krega 
        console.log("MongoDb is connected")
    })
    .catch((er)=>{ // agar error hoga to error dega ki kahan error hai
        console.log(er)
    })

    // console.log("Mongo URL:", process.env.MONGO_URI);
    // console.log("DB Name:", mongoose.connection.name);

//api started
app.use('/api/admin',require('./routes/adminRoute'))
app.use('/api/session/',require('./routes/sessionRoute'));
app.use('/api/subject/',require('./routes/subjectRoute'));
app.use('/api/exams/',require('./routes/examinationRoute'));
app.use('/api/question/',require('./routes/questionBank'));
app.use('/api/examinee/',require('./routes/examineeRoute'));
app.use('/api/message',require('./routes/messageRoute'));
app.use('/api/admindashboard/',require('./routes/adminDashboard'));

//http://localhost:5000/api/admin

//api end

app.listen(5000,()=>{
    console.log("server is running on http://localhost:5000/")
})