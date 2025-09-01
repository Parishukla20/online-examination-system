import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./Register.css"

const Registration = () => {
    const [form,setform]= useState({
        name:'',
        email:'',
        college:'',
        course:'',
        branch:'',
        phone:'',
        session:'',
        password:'',
        status:'inactive'
    })
    const handleChange= (e)=>{
        setform({...form,[e.target.name]:e.target.value})
    }
    const handleSubmit = async(e)=>{
        e.preventDefault();
    try{
      const res = await axios.post('http://localhost:5000/api/examinee',form);
        alert("Resgistered Successfully")
        // window.location.href='/'
        console.log(res.data);
        
    }
    catch(er){
        console.log(er)
        alert("Sorry try again later")
    }}
    const [data,setData]= useState([])
    const handlefetch = async(e)=>{
      try{
          const res= await axios.get('http://localhost:5000/api/session');
          setData(res.data)
      }
      catch(er){
        console.log(er)
      }
    }
    useEffect(()=>{
        handlefetch();
    },[])
  return (
   <>
    <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-md-6">

        <div className="card shadow-lg rounded-3">
          <div className="card-header text-center bg-primary text-white">
            <h3>Registration Form</h3>
          </div>
          <div className="card-body p-4"></div>
    <form method="post" onSubmit={handleSubmit}>
              {/* <!-- Name --> */}
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" name="name" onChange={handleChange} placeholder="Enter your name" required/>
              </div>

              {/* <!-- Email --> */}
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" name="email" onChange={handleChange} placeholder="Enter your email" required/>
              </div>

              {/* <!-- College --> */}
              <div className="mb-3">
                <label className="form-label">College</label>
                <input type="text" className="form-control" name="college"  onChange={handleChange} placeholder="Enter your college" required/>
              </div>

              {/* <!-- Course --> */}
              <div className="mb-3">
                <label className="form-label">Course</label>
                <input type="text" className="form-control" name="course"  onChange={handleChange}  placeholder="Enter your course" required/>
              </div>

              {/* <!-- Branch --> */}
              <div className="mb-3">
                <label className="form-label">Branch</label>
                <input type="text" className="form-control" name="branch"  onChange={handleChange}  placeholder="Enter your branch" required/>
              </div>

              {/* <!-- Phone --> */}
              <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <input type="tel" className="form-control" name="phone"  onChange={handleChange}  placeholder="Enter your phone number" required/>
              </div>

              {/* <!-- Session --> */}
              <div className="mb-3">
                <label className="form-label">Session</label>
             <select name='session' id='' onChange={handleChange} className='form-select'>
                <option value="">Select Session</option>
                {data.map((item)=>(
                    <option key={item._id} value={item._id}>{item.name}</option>
                ))}
            </select>
              </div>
  
              {/* <!-- Password --> */}
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" name="password"  onChange={handleChange}  placeholder="Enter your password" required/>
              </div>

              {/* <!-- Status -->
              <div className="mb-3">
                <label className="form-label">Status</label>
                <select className="form-select" name="status" required>
                  <option value="">Select Status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div> */}
              {/* session */}
          
              {/* <!-- Submit --> */}
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">Register</button>
              </div>

            </form>
              </div>
        </div>

      </div>
    </div>
   </>
  )
}

export default Registration