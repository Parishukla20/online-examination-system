const express = require('express');
const Session = require('../models/Session');
const router = express.Router();

router.post('/',async(req,res)=>{ //api jo post data ko handle karti ho
    const result = await new Session(req.body);
    result.save();
    return res.json({message:"session added successfully"});

})

router.get('/',async(req,res)=>{ //
    const result = await Session.find();
    return res.json(result)
});

router.put('/:id' , async(req,res)=>{
    const result = await Session.findByIdAndUpdate(req.params.id,req.body)
    return res.json({message:"Session Updated"})
})
router.delete('/:id', async(req,res)=>{
    const result = await Session.findByIdAndDelete(req.params.id);
    return res.json({message:"Session Deleted Successfully"})
});


module.exports = router;