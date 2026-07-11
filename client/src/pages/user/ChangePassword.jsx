import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const ChangePassword = () => {
    const id = localStorage.getItem('userId');
    const[form,setForm]=useState({
        op:'',
        np:'',
        cnp:''
    })
    const handleChange = (e)=>{
       setForm({...form,[e.target.name]:e.target.value})
    }
    const handleSubmit = async(e)=>{
        e.preventDefault();
        try
        {
            // const res = await axios.put(`http://localhost:5000/api/examinee/change/${id}`,form)  //ye local system ke liye link
            const res = await axios.put(`https://online-examination-system-2-q8o7.onrender.com/api/examinee/change/${id}`,form)
            alert(res.data.message)
        }
        catch(er)
        {
            console.log(er)
            alert(res.data.message)
        }
    }
  return (
    <div className="d-flex justify-content-center align-items-start" style={{ minHeight: "80vh",background: "linear-gradient(135deg, #EEF2FF, #DBEAFE)",paddingTop:"80px"   // soft gradient background
  }}
 >
  <div 
    className="shadow-lg rounded-3 overflow-hidden"
    style={{ width: "50%", background: "#fff",marginTop:"10px" }}
  >
    {/* Header Section */}
    <div 
      className="text-center p-3"
      style={{ 
        background: "linear-gradient(90deg, #2563EB, #1E40AF)", 
        color: "white", 
        fontWeight: "600",
        fontSize: "1.3rem"
      }}
    >
      Change Password
    </div>

    {/* Form Section */}
    <div className="p-4" style={{ background: "linear-gradient(135deg,#f9fbff,#f3f8ff)" }}>
      <form action="" method="POST" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label fw-semibold">Enter your old password</label>
          <input 
            type="password" 
            className="form-control shadow-sm" 
            name="op" 
            onChange={handleChange} 
            placeholder="Old password"
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Enter new password</label>
          <input 
            type="password" 
            className="form-control shadow-sm" 
            name="np" 
            onChange={handleChange} 
            placeholder="New password"
          />
        </div>

        <div className="mb-4">
          <label className="form-label fw-semibold">Confirm new password</label>
          <input 
            type="password" 
            className="form-control shadow-sm" 
            name="cnp" 
            onChange={handleChange} 
            placeholder="Confirm new password"
          />
        </div>

        <button 
          className="btn w-100" 
          type="submit"
          style={{
            background: "linear-gradient(90deg, #2563EB, #1E40AF)",
            color: "#fff",
            fontWeight: "600",
            border: "none",
            borderRadius: "8px",
            padding: "10px"
          }}
        >
          Update
        </button>
      </form>
    </div>
  </div>
</div>

  )
}

export default ChangePassword