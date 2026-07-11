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
      const res = await axios.get("https://online-examination-system-2-q8o7.onrender.com/api/Subject");   //link changed
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
        await axios.put(`https://online-examination-system-2-q8o7.onrender.com/api/Subject/${editId}`, {   //link changed
          name,
          description,
        });
        alert("Subject Updated Successfully");
      } else {
        // add
        await axios.post("https://online-examination-system-2-q8o7.onrender.com/api/Subject", {    //link changed
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
      await axios.delete(`https://online-examination-system-2-q8o7.onrender.com/api/Subject/${id}`);   //link changed
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