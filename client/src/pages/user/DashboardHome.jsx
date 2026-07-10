import React, { useEffect, useState } from "react";
import MyResult from "./MyResult"; // 👈 apna table component import kiya

const DashBoardHome = () => {
  const [progress, setProgress] = useState(null);

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const res = await fetch(
          "http://localhost:5000/api/exams/progress/69b671fdc9ed16381190033c"
        );
        const data = await res.json();
        setProgress(data);
      } catch (err) {
        console.error("❌ Error fetching progress:", err);
      }
    };
    fetchProgress();
  }, []);

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        background: "#f0f4f8",
        minHeight: "100vh",
        overflowY: "auto", // 👈 full page scroll enable
      }}
    >
      {/* Records Section */}
      <h2
        style={{
          marginBottom: "20px",
          color: "#efeefcff",
          background: "#7972f9ff",
          padding: "15px",
          paddingLeft: "30px",
          borderRadius: "10px",
        }}
      >
        Your Records
      </h2>

      {!progress ? (
        <p style={{ fontSize: "16px", color: "#555" }}>Loading your data...</p>
      ) : (
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <Card
            title="Total Exams"
            value={progress?.totalExams || 0}
            color="#007bff"
          />
          <Card
            title="Passed Exams"
            value={progress?.passedExams || 0}
            color="#28a745"
          />
          <Card
            title="Failed Exams"
            value={progress?.failedExams || 0}
            color="#dc3545"
          />
          <Card
            title="Average Score"
            value={progress ? parseInt(progress.avgScore) : 0}
            color="#ffc107"
          />
        </div>
      )}

      {/* Result Section */}
      <div style={{ marginTop: "40px" }}>
        <MyResult />
      </div>
    </div>
  );
};

// Card Component
const Card = ({ title, value, color }) => (
  <div
    style={{
      ...cardStyle,
      background: `linear-gradient(135deg, ${color}55, ${color}aa)`,
    }}
    className="dashboard-card"
  >
    <h3 style={{ marginBottom: "10px", fontSize: "14px" }}>{title}</h3>
    <ProgressBar value={value} color={color} />
    <p style={{ marginTop: "5px", fontWeight: "bold" }}>{value}</p>
  </div>
);

// Progress Bar Component
const ProgressBar = ({ value, color }) => {
  const percentage = Math.min(value, 100);
  return (
    <div
      style={{
        height: "12px",
        background: "#dcdcdc",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${percentage}%`,
          background: color,
          borderRadius: "8px",
          transition: "width 0.5s ease-in-out",
        }}
      ></div>
    </div>
  );
};

const cardStyle = {
  flex: "1",
  minWidth: "180px",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  textAlign: "center",
  cursor: "pointer",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  color: "#fff",
};

const style = document.createElement("style");
style.innerHTML = `
  .dashboard-card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0,0,0,0.2);
  }
`;
document.head.appendChild(style);

export default DashBoardHome;