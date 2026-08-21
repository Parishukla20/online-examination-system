import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { Link } from 'react-router';
const Login = () => {
  const [form, setform] = useState({
    email: '',
    password: ''
  });
  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      // const res = await axios.post('http://localhost:5000/api/examinee/login',form)   //use for system running
      const res = await axios.post('https://online-examination-system-2-q8o7.onrender.com/api/examinee/login', form) //use for render platform running


      if (res.data.message == "Login Successfully") {
        localStorage.setItem("userEmail", res.data.user.email)
        localStorage.setItem("userId", res.data.user.id)
        localStorage.setItem("UserRole", res.data.user.role);
        window.location.href = '/userdashboard'
      }
    } catch (er) {
      console.log(er)
      alert("Sorry Try Again")
    }
  }

  return (
    <>
      <div className="login-contain">
        <div className="login-card">
          <h2 className="login-title">Exam Prep</h2>

          <form noValidate method='POST' onSubmit={handleSubmit} className="login-form">
            <div className="field">
              <input
                className={`login-input`}
                type="email"
                name="email"
                onChange={handleChange}
                placeholder="Email"
              />

            </div>

            <div className="field">
              <input
                className={`login-input`}
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
              />

            </div>

            <input
              type="submit"
              value="Login"
              className="login-button"
            />
          </form>
        </div>
      </div>
    </>
  )
}

export default Login;