// const express = require('express');
// const Session = require('../models/Session');
// const router =express.Router();


// router.post('/',async(req,res)=>{
//     const result = await new Session(req.body);
//     result.save();
//     return res.json({message:"Session Added Successfully"});
// })

// router.get('/',async(req,res)=>{
//   const result = await Session.find();
//   return res.json(result)
// });
// router.delete('/:id',async(req,res)=>{
//     const result = await Session.findByIdAndDelete(req.params.id);
//     return res.json({message:"Session Deleted Successfully"})
// });
// // router.put('/:id',async(req,res)=>{
// //        const result = await Session.findByIdAndUpdate(req.params.id,res.body)
// //        return res.json({message:"Session Updated"})
// // })

// router.put("/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { name, description } = req.body;

//     const updatedSession = await Session.findByIdAndUpdate(
//       id,
//       { name, description },
//       { new: true, runValidators: true } // new:true returns updated doc
//     );

//     if (!updatedSession) {
//       return res.status(404).json({ message: "Session not found" });
//     }

//     res.json(updatedSession);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Update failed" });
//   }
// });


// module.exports = router;











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