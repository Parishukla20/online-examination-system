const Admin =require('../models/Admin');
const express = require('express');
//console.log(express)
const router = express.Router();


router.get('/',async(req,res)=>{
    return res.json("Api called")
})

router.post('/',async(req,res)=>{
    const reg = await new Admin(req.body)
    reg.save();
    return res.json("Admin added successfully")
});

router.post('/login',async(req,res)=>{
    const{email,password}=req.body;
    const admin =await Admin.findOne({email:email});
    if(!admin){
        return res.status(400).json("Admin not found")
    }
    if(admin.password==password){
        return res.status(200).json({message:"Login Successfully",admin:{
            email:admin.email,
            id:admin._id,
            role:"Admin"
        }})
    }
    else{
        return res.json({message:"Password not matched"})
    }
})


router.put('/change/:id', async (req, res) => {
  const { op, np, cnp } = req.body;
  const { id } = req.params;

  try {
    const admin = await Admin.findById(id);
    if (!admin) return res.status(400).json({ message: "Admin not found" });

    if (admin.password !== op) {
      return res.json({ message: "Your old password not matched" });
    }

    if (op === np) {
      return res.json({ message: "Your old and new password are same" });
    }

    if (np !== cnp) {
      return res.json({ message: "New and confirm password not matched" });
    }

    admin.password = cnp;
    await admin.save();

    return res.json({ message: "Password updated successfully" });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
});
module.exports = router