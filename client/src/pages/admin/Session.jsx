// import React from 'react'
// import { useState } from 'react'
// import axios from 'axios'
// import { useEffect } from 'react'
// const Session = () => {

//   const[form,setform] = useState({
//     name:'',
//     description:''
//   })
//   const handleChange = (e)=>{
//     setform({...form,[e.target.name]:e.target.value})
//   }
// const[id,setId] =useState({
//   id:''
// });
// const [edit, setEdit] =useState(null);


//   const handleSubmit = async(e)=>{
//     e.preventDefault();
//     try{
//      if(edit){
//  const res=await axios.put('http://localhost:5000/api/session/${id.id}',form);
//       alert("Updated Successfully");
//      }
//      else{
//        const res=await axios.post('http://localhost:5000/api/session',form);
//       alert("Added Successfully");
//      }
//     }
//     catch(er){
//       alert("Session not Added");
//       console.log(er)
//     }
//   }
//   const [data,setData] = useState([]);
//   const handlefetch =async()=>{
//     const res = await axios.get('http://localhost:5000/api/session');
//     setData(res.data)
//   }

//   useEffect(()=>{
//     handlefetch()
//   },[])

//   const handleDelete = async(id)=>{
//     try{
//       const res = await axios.delete('http://localhost:5000/api/session/${id}');
//       alert("session Deleted Successfully")
//     }
//     catch(er){
//       alert("Sorry Try Again Later")
//       console.log(er);
//     }
//   }

// const handleEdit =(item)=>{
// setform({
//   name:item.name,
//   description:item.description
// })
// setEdit(true)
// setId({
//   id:item._id
// });
// }
//   return (
//     <>
//      <div className="header">
//           <h1>Session Management</h1>
//         </div>

//         {/* <!-- Create Session Form --> */}
//         <div className="card">
//           <h3>Create New Session</h3>
//           <form method="post" onSubmit={handleSubmit} >
//             <label>Session Name</label>
//             <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Enter session name" />

//             <label>Description</label>
//             <textarea placeholder="Enter description" value={form.description} name="description" onChange={handleChange} >{form.description}</textarea>

//             <div className="buttons">
//               <button type="button" className="cancel">
//                 Cancel
//               </button>
//               <button type="submit" className="submit">
//                 Save
//               </button>
//             </div>
//           </form>
//         </div>

//         {/* <!-- Sessions Table --> */}
//         <div className="card">
//           <h4>All Sessions</h4>
//           <table>
//             <thead>
//               <tr>
//                 <th>No.</th>
//                 <th>Name</th>
//                 <th>Description</th>
                
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.map((item,i)=>(
//                 <tr key={item._id}>
//                   <td>{i+1}</td>
//                   <td>{item.name}</td>
//                   <td>{item.description}</td>
//                   <td>
//                     <button className="btn-danger btn" onClick={()=>{handleDelete(item._id)}}>Delete</button>
//                     <button className="btn btn-success" onClick={()=>{handleEdit(item)}}>Edit</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
      
      
//     </>
//   )
// }

// export default Session

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Session.css";

export default function Session() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [sessions, setSessions] = useState([]);
  const [editId, setEditId] = useState(null);

  // Fetch sessions from backend
  const fetchSessions = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/session");
      setSessions(res.data);
    } catch (err) {
      console.log(err);
      alert("Failed to fetch sessions");
    }
  };

  useEffect(() => {
    fetchSessions();
  }, []);

  // Handle form submit (Add or Update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    const formData = { name, description };

    try {
      if (editId) {
        // Update existing session
        await axios.put(`http://localhost:5000/api/session/${editId}`, formData);
        alert("Session updated successfully");
      } else {
        // Add new session
        await axios.post("http://localhost:5000/api/session", formData);
        alert("Session added successfully");
      }

      setName("");
      setDescription("");
      setEditId(null);
      fetchSessions();
    } catch (err) {
      console.log(err);
      alert("Operation failed");
    }
  };

  // Handle edit button
  const handleEdit = (session) => {
    setName(session.name);
    setDescription(session.description);
    setEditId(session._id); // Set current editing session ID
  };

  // Handle delete button
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/session/${id}`);
      alert("Session deleted successfully");
      fetchSessions();
    } catch (err) {
      console.log(err);
      alert("Delete failed");
    }
  };

  // Handle cancel edit
  const handleCancel = () => {
    setName("");
    setDescription("");
    setEditId(null);
  };

  return (
    <div className="session-page">
      <h1>Session Management</h1>
      {/* Form */}
      <form onSubmit={handleSubmit} className="session-form">
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">{editId ? "Update" : "Submit"}</button>
        {editId && <button type="button" onClick={handleCancel}>Cancel</button>}
      </form>

      {/* Table */}
      <h3>Sessions</h3>
      <table className="session-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Description</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {sessions.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                No sessions yet
              </td>
            </tr>
          ) : (
            sessions.map((session, index) => (
              <tr key={session._id}>
                <td>{index + 1}</td>
                <td>{session.name}</td>
                <td>{session.description}</td>
                <td>{new Date(session.createdAt).toLocaleDateString()}</td>
                <td>
                  <button className="btn-primary btn" onClick={() => handleEdit(session)}>Edit</button>
                  <button className="btn-danger btn" onClick={() => handleDelete(session._id)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}