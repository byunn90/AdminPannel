import React from "react";
import { FaUsers, FaDoorOpen, FaClipboardList, FaClock } from "react-icons/fa"; // Importing icons
import "./dashboard.css"; // Assuming this file contains your styles

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="card red-card">
        <FaUsers size={32} /> {/* Users Icon */}
        <h3>Users</h3>
        <p>Details about users...</p>
      </div>
      <div className="card green-card">
        <FaDoorOpen size={32} /> {/* Rooms Icon */}
        <h3>Rooms</h3>
        <p>Details about rooms...</p>
      </div>
      <div className="card yellow-card">
        <FaClipboardList size={32} /> {/* Sessions Icon */}
        <h3>Sessions</h3>
        <p>Details about sessions...</p>
      </div>
      <div className="card blue-card">
        <FaClock size={32} /> {/* Session Time Icon */}
        <h3>Session Time</h3>
        <p>Details about session time...</p>
      </div>
    </div>
  );
}

export default Dashboard;
