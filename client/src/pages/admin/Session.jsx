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
      const res = await axios.get("https://online-examination-system-2-q8o7.onrender.com/api/session");  //link changed
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
        await axios.put(`https://online-examination-system-2-q8o7.onrender.com/api/session/${editId}`, formData);  //link changed
        alert("Session updated successfully");
      } else {
        // Add new session
        await axios.post("https://online-examination-system-2-q8o7.onrender.com/api/session", formData);   //link changed
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
      await axios.delete(`https://online-examination-system-2-q8o7.onrender.com/api/session/${id}`);   //link changed
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