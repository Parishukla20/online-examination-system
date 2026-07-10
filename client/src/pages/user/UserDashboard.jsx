import React from "react";
import "./UserDashboard.css";
import { Link, Outlet } from 'react-router';

export default function AdminDashboard({ children }) {
  const handlelogout = () => {
    localStorage.removeItem('userEmail')
    localStorage.removeItem('userRole')
    localStorage.removeItem('userId')
    window.location.href = '/'
  }
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning!'
    if (hour < 17) return 'Good Afternoon!'
    return 'Good Evening!'
  }
  
  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <h2 className="sidebar-title">User</h2>
        <nav>
          <a href="/userdashboard/myexams">My Exam</a>
          <a href="/userdashboard/myresult">My results</a>
          <a href="/userdashboard/changepassword">Change Password</a>
          <a href="/" onClick={() => { { handlelogout() } }}>Log out</a>
          <a href="/userdashboard/message">Message</a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="admin-main">

        {/* Navbar */}
        <header className="admin-navbar">
          <div>
            <h3>{getGreeting()}</h3>
          </div>
          <h1>User Dashboard</h1>
        </header>

        {/* Page Content */}
        <main className="admin-content">{children}
          <Outlet />
        </main>
      </div>
    </div>
  );
}
