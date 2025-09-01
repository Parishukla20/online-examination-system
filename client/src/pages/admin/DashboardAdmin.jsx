// import React, { useEffect, useState } from "react";

// const AdminDashboard = () => {
 
//   // Example stats for admin dashboard
//   const stats = [
//     { title: "Upcoming Exams", value: 12, color: "#1abc9c" },
//     { title: "Exams Conducted", value: 45, color: "#3498db" },
//     { title: "Total Examinees", value: 320, color: "#9b59b6" },
//     { title: "Examinees Appeared", value: 280, color: "#e67e22" },
//     { title: "Exams Passed", value: 250, color: "#2ecc71" },
//     { title: "Exams Failed", value: 70, color: "#e74c3c" },
//   ];

//   // Example recent results
//   const recentResults = [
//     { user: "John Doe", exam: "Maths", date: "15 Aug 2025", score: 85, status: "Passed" },
//     { user: "Jane Smith", exam: "English", date: "17 Aug 2025", score: 45, status: "Failed" },
//     { user: "Bob Johnson", exam: "Physics", date: "19 Aug 2025", score: 78, status: "Passed" },
//     { user: "Alice Brown", exam: "Chemistry", date: "20 Aug 2025", score: 90, status: "Passed" },
//     { user: "Tom Clark", exam: "Biology", date: "21 Aug 2025", score: 60, status: "Passed" },
//   ];

//   return (

//     <div
//       style={{
//         padding: "20px",
//         fontFamily: "Arial, sans-serif",
//         background: "#f0f4f8",
//         minHeight: "80vh",
//       }}
//     >
//       {/* Heading */}
//       <h2
//         style={{
//           marginBottom: "20px",
//           color: "#fff",
//           background: "#4631e8ff",
//           padding: "10px 30px",
//           borderRadius: "8px",
//           boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
//         }}
//       >
//         Exam Records
//       </h2>

//       {/* Cards Row */}
//       <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginBottom: "30px" }}>
//         {stats.map((stat, index) => (
//           <Card key={index} title={stat.title} value={stat.value} color={stat.color} />
//         ))}
//       </div>

      
//     </div>
//   );
// };

// // Card Component
// const Card = ({ title, value, color }) => (
//   <div
//     style={{
//       ...cardStyle,
//       background: `linear-gradient(135deg, ${color}55, ${color}aa)`,
//     }}
//     onMouseEnter={(e) => {
//       e.currentTarget.style.transform = "translateY(-5px)";
//       e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
//     }}
//     onMouseLeave={(e) => {
//       e.currentTarget.style.transform = "translateY(0)";
//       e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
//     }}
//   >
//     <h3 style={{ marginBottom: "10px", fontSize: "14px" }}>{title}</h3>
//     <ProgressBar value={value} color={color} />
//     <p style={{ marginTop: "5px", fontWeight: "bold" }}>{value}</p>
//   </div>
// );

// // Progress Bar Component
// const ProgressBar = ({ value, color }) => {
//   return (
//     <div
//       style={{
//         height: "12px",
//         background: "#dcdcdc",
//         borderRadius: "8px",
//         overflow: "hidden",
//         boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
//       }}
//     >
//       <div
//         style={{
//           height: "100%",
//           width: `${value}%`,
//           background: color,
//           borderRadius: "8px",
//           transition: "width 0.5s ease-in-out",
//         }}
//       ></div>
//     </div>
//   );
// };

// // Styles
// const cardStyle = {
//   flex: "1",
//   minWidth: "180px",
//   padding: "20px",
//   borderRadius: "12px",
//   boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//   textAlign: "center",
//   cursor: "pointer",
//   transition: "transform 0.2s, box-shadow 0.2s",
//   color: "#fff",
// };



// export default AdminDashboard;









import React from "react";

const WelcomeAdmin = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.textSection}>
          <h1 style={styles.heading}>Welcome, Admin 👋</h1>
          <p style={styles.subheading}>
            Manage your Online Examination System efficiently. Use the sidebar to access exams, users, settings, and more.
          </p>
          
        </div>
        <div style={styles.imageSection}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Admin Illustration"
            style={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "30px",
    width: "100%",
    height: "70vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f4f9",
  },
  card: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "linear-gradient(135deg, #4a90e2, #1c3c88)",
    padding: "50px",
    borderRadius: "20px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
    maxWidth: "1000px",
    width: "100%",
    color: "#fff",
  },
  textSection: {
    flex: 1,
    paddingRight: "40px",
  },
  heading: {
    fontSize: "42px",
    fontWeight: "700",
    marginBottom: "20px",
  },
  subheading: {
    fontSize: "18px",
    marginBottom: "30px",
    lineHeight: "1.5",
    color: "#e0e7ff",
  },
  
  imageSection: {
    flexShrink: 0,
  },
  image: {
    width: "220px",
    height: "220px",
    objectFit: "contain",
    opacity: 0.9,
  },
};

export default WelcomeAdmin;
