import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import {Link} from 'react-router';
const Login=()=>{
  const [form,setform]=useState({
    email:'',
    password:''
  });
  const handleChange =(e)=>{
    setform({...form,[e.target.name]:e.target.value})
  }
  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
      const res = await axios.post('http://localhost:5000/api/examinee/login',form)
      if(res.data.message =="Login Successfully"){
        localStorage.setItem("userEmail",res.data.user.email)
        localStorage.setItem("userId",res.data.user.id)
        localStorage.setItem("UserRole",res.data.user.role);
        window.location.href='/userDashboard'
      }
    }catch(er){
      console.log(er)
      alert("Sorry Try Again")
    }
  }

  return(
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



// import './Login.css';
// import axios from 'axios';

// export default function Login() {
//   const [values, setValues] = useState({ email: '', password: '' });
//   const [touched, setTouched] = useState({ email: false, password: false });

//   const errors = validate(values);

//   function validate(v) {
//     const e = {};
//     if (!v.email) e.email = 'Email is required';
//     else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(v.email))
//       e.email = 'Enter a valid email';

//     if (!v.password) e.password = 'Password is required';
//     else if (v.password.length < 1)
//       e.password = 'Minimum 1 character';
//     return e;
//   }

//   const onChange = (ev) =>
//     setValues((s) => ({ ...s, [ev.target.name]: ev.target.value }));

//   const onBlur = (ev) =>
//     setTouched((s) => ({ ...s, [ev.target.name]: true }));

//   const onSubmit = async (ev) => {
//     ev.preventDefault();
//     setTouched({ email: true, password: true });
//     const hasError = Object.keys(errors).length > 0;
//     if (!hasError) {
//       try {
//         const res = await axios.post('http://localhost:5000/api/admin/login', values);
//         if (res.data.message === "Login Successfully") {
//           alert("Login Successfully");
//           localStorage.setItem('adminEmail', res.data.admin.email);
//           localStorage.setItem('id', res.data.admin.id);
//           localStorage.setItem('role', res.data.admin.role);
//           window.location.href = '/admindashboard';
//         }
//       } catch (err) {
//         alert("Login failed");
//       }
//     }
//   };

//   return (
//     <div className="login-contain">
//       <div className="login-card">
//         <h2 className="login-title">Exam Prep</h2>

//         <form noValidate method='POST' onSubmit={handleSubmit} className="login-form">
//           <div className="field">
//             <input
//               className={`login-input ${touched.email && errors.email ? 'input-error' : ''}`}
//               type="email"
//               name="email"
//               onChange={handleChange}
//               placeholder="Email"
//               value={values.email}
//               onBlur={onBlur}
//               aria-invalid={touched.email && !!errors.email}
//             />
//             {touched.email && errors.email && (
//               <p className="error-text">{errors.email}</p>
//             )}
//           </div>

//           <div className="field">
//             <input
//               className={`login-input ${touched.password && errors.password ? 'input-error' : ''}`}
//               type="password"
//               name="password"
//               placeholder="Password"
//               onChange={handleChange}
//               value={values.password}
//               onBlur={onBlur}
//               aria-invalid={touched.password && !!errors.password}
//             />
//             {touched.password && errors.password && (
//               <p className="error-text">{errors.password}</p>
//             )}
//           </div>

//           <input
//             type="submit"
//             value="Login"
//             className="login-button"
//             disabled={Object.keys(errors).length > 0 && (touched.email || touched.password)}
//           />
//         </form>
//       </div>
//     </div>
//   );
// }