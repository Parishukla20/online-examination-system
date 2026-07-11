import React, { useEffect, useState } from 'react'
import "./Myexams.css"
import axios from "axios";
import {Link} from 'react-router' ;

const Myexams = () => {
    const [data,setData]=useState([]);
    const handlefetch = async ()=>{
        // const res = await axios.get('http://localhost:5000/api/exams/exams')   ye local sys ke liye link
        const res = await axios.get('https://online-examination-system-2-q8o7.onrender.com/api/exams/exams')
        setData(res.data)
        // console.log(data)
    }
    useEffect(()=>{
        handlefetch();
    },[])
    
     const exams = [];
  return (
    <div className="exam-container">
      <h2 className="exam-title">My Exams</h2>
      <table className="exam-table">
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Exam Name</th>
            <th>Exam Duration</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item , i) => (
            <tr key={item._id}>
              <td>{i + 1}</td>
              <td>{item.title}</td>
              <td>{item.date}</td>
              <td>
                <Link className="btn btn-primary" to={`/userdashboard/getexam/`+item._id} >Start Exam</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Myexams