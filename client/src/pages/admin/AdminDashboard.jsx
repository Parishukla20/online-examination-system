import "./AdminDashboard.css";
import { Outlet } from 'react-router';
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AdminDashboard({ children }) {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning!'
    if (hour < 17) return 'Good Afternoon!'
    return 'Good Evening!'
  }
  const handlelogout = () => {
    localStorage.removeItem('adminEmail')
    localStorage.removeItem('Role')
    localStorage.removeItem('id')
    window.location.href = '/'
  }
  const [data, setData] = useState([]);
  const handlefetch = async () => {
    const res = await axios.get('https://online-examination-system-2-q8o7.onrender.com/api/admindashboard/')     //link changed
    setData(res.Data);
  }
  useEffect(() => {
    handlefetch()
  }, [])
  console.log(data)
  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <h2 className="sidebar-title">Admin</h2>
        <nav>
          <a href="/admindashboard/session">Session</a>
          <a href="/admindashboard/subject">Subject</a>
          <a href="/admindashboard/examinee">Examinee</a>
          <a href="/admindashboard/examination">Examination</a>
          <a href="/admindashboard/questionbank">Question Bank</a>
          <a href="/admindashboard/reportgeneration">Report Generation</a>
          <a href="/admindashboard/adminchangepassword">Change Password</a>
          <a href="/adminlogin" onClick={() => { { handlelogout() } }}>Logout</a>
          <a href="/admindashboard/messagereply">Message</a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="admin-main">

        {/* Navbar */}
        <header className="admin-navbar">
          <div>
            <h3>{getGreeting()}</h3>
          </div>
          <h1>Admin Dashboard</h1>
        </header>

        {/* Page Content */}
        <main className="admin-content">{children}
          <Outlet />
        </main>
      </div>
    </div>
  );
}
