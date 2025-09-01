// import React, { useState, useEffect } from 'react'
// import axios from 'axios'

// const Subject = () => {
//   const [form, setForm] = useState({
//     name: '',
//     description: ''
//   })

//   const [id, setId] = useState('')
//   const [edit, setEdit] = useState(false)
//   const [data, setData] = useState([])

//   // fetch subjects
//   const handleFetch = async () => {
//     try {
//       const res = await axios.get('http://localhost:5000/api/Subject')
//       setData(res.data)
//     } catch (err) {
//       console.log(err)
//     }
//   }

//   useEffect(() => {
//     handleFetch()
//   }, [])

//   // handle input change
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value })
//   }

//   // add / update subject
//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     try {
//       if (edit) {
//         await axios.put(`http://localhost:5000/api/Subject/${id}`, form)
//         alert('Updated Successfully')
//       } else {
//         await axios.post('http://localhost:5000/api/Subject', form)
//         alert('Added Successfully')
//       }
//       handleFetch(); // refresh table
//       setForm({ name: '', description: '' }) // reset form
//       setEdit(false)
//       setId('')
//     } catch (er) {
//       alert('Operation failed, try again later')
//       console.log(er)
//     }
//   }

//   // delete subject
//   const handleDelete = async (id) => {
//     if (!window.confirm('Are you sure you want to delete this subject?')) return
//     try {
//       await axios.delete(`http://localhost:5000/api/Subject/${id}`)
//       alert('Subject Deleted Successfully')
//       handleFetch() // refresh table
//     } catch (er) {
//       alert('Sorry Try Again Later')
//       console.log(er)
//     }
//   }

//   // edit subject
//   const handleEdit = (item) => {
//     setForm({
//       name: item.name,
//       description: item.description
//     })
//     setEdit(true)
//     setId(item._id)
//   }

//   // cancel editing
//   const handleCancel = () => {
//     setForm({ name: '', description: '' })
//     setEdit(false)
//     setId('')
//   }

//   return (
//     <>
//       <div className="header">
//         <h1>Subject Management</h1>
//       </div>

//       {/* Create / Edit Subject Form */}
//       <div className="card">
//         <h3>{edit ? 'Edit Subject' : 'Create New Subject'}</h3>
//         <form onSubmit={handleSubmit}>
//           <label>Subject Name</label>
//           <input
//             type="text"
//             name="name"
//             value={form.name}
//             onChange={handleChange}
//             placeholder="Enter Subject name"
//             required
//           />

//           <label>Description</label>
//           <textarea
//             placeholder="Enter description"
//             value={form.description}
//             name="description"
//             onChange={handleChange}
//             required
//           />

//           <div className="buttons">
//             {edit && (
//               <button
//                 type="button"
//                 className="cancel"
//                 onClick={handleCancel}
//               >
//                 Cancel
//               </button>
//             )}
//             <button type="submit" className="submit">
//               {edit ? 'Update' : 'Save'}
//             </button>
//           </div>
//         </form>
//       </div>

//       {/* Subjects Table */}
//       <div className="card">
//         <h4>All Subjects</h4>
//         <table>
//           <thead>
//             <tr>
//               <th>No.</th>
//               <th>Name</th>
//               <th>Description</th>
//               <th>Action</th> {/* ✅ Added Action Column */}
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((item, i) => (
//               <tr key={item._id}>
//                 <td>{i + 1}</td>
//                 <td>{item.name}</td>
//                 <td>{item.description}</td>
//                 <td>
//                   {/* ✅ Added Edit + Delete Buttons */}
//                   <button
//                     className="btn btn-success"
//                     onClick={() => handleEdit(item)}
//                   >
//                     Edit
//                   </button>
//                   &nbsp;
//                   <button
//                     className="btn btn-danger"
//                     onClick={() => handleDelete(item._id)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//             {data.length === 0 && (
//               <tr>
//                 <td colSpan="4">No subjects found</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </>
//   )
// }

// export default Subject

import React, { useState, useEffect } from "react";
import "./Subject.css";
import axios from "axios";

export default function Subject() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [editId, setEditId] = useState(null);

  // Fetch all subjects
  const fetchSubjects = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/Subject");
      setSubjects(res.data);
    } catch (err) {
      console.error("Error fetching subjects:", err);
    }
  };

  useEffect(() => {
    fetchSubjects();
  }, []);

  // Add / Update subject
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !description.trim()) return;

    try {
      if (editId) {
        // update
        await axios.put(`http://localhost:5000/api/Subject/${editId}`, {
          name,
          description,
        });
        alert("Subject Updated Successfully");
      } else {
        // add
        await axios.post("http://localhost:5000/api/Subject", {
          name,
          description,
        });
        alert("Subject Added Successfully");
      }

      fetchSubjects();
      setName("");
      setDescription("");
      setEditId(null);
    } catch (err) {
      console.error("Error submitting subject:", err);
      alert("Something went wrong!");
    }
  };

  // Delete subject
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this subject?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/Subject/${id}`);
      alert("Subject Deleted Successfully");
      fetchSubjects();
    } catch (err) {
      console.error("Error deleting subject:", err);
      alert("Failed to delete subject!");
    }
  };

  // Edit subject
  const handleEdit = (subject) => {
    setName(subject.name);
    setDescription(subject.description);
    setEditId(subject._id);
  };

  // Cancel editing
  const handleCancel = () => {
    setName("");
    setDescription("");
    setEditId(null);
  };

  return (
    <div className="subject-page">
      <h2>Subject Management</h2>
      <h4>{editId ? "Update Subject" : "Create New Subject"}</h4>

      {/* Form */}
      <form onSubmit={handleSubmit} className="subject-form">
        <input
          type="text"
          placeholder="Enter Subject Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div>
          {editId && (
            <button
              type="button"
              onClick={handleCancel}
              className="btn btn-secondary"
            >
              Cancel
            </button>
          )}
          <button type="submit" className="btn btn-primary">
            {editId ? "Update" : "Save"}
          </button>
        </div>
      </form>

      {/* Table */}
      <h3>All Subjects</h3>
      <table className="subject-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {subjects.length === 0 ? (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                No subjects yet
              </td>
            </tr>
          ) : (
            subjects.map((subject, index) => (
              <tr key={subject._id}>
                <td>{index + 1}</td>
                <td>{subject.name}</td>
                <td>{subject.description}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleEdit(subject)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(subject._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}