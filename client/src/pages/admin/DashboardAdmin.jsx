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
