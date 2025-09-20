import React from "react";
import { useNavigate } from "react-router-dom";
import "./Teamtwolevel.css";

const TeamTwoLevel = () => {
  const navigate = useNavigate();

  const teamMembers = [
    { id: "79******29", date: "2025-08-20 23:56:25", status: "Not Active" },
    { id: "73******60", date: "2025-08-24 07:46:43", status: "Active" },
  ];

  return (
    <div className="teamtwo-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          
          <h2>Team 2 Members</h2>
        </div>
        <div className="navbar-right">
          <button onClick={() => navigate("/home")}>Home</button>
          <button onClick={() => navigate("/teams")}>Teams</button>
          <button onClick={() => navigate("/account")}>Account</button>
        </div>
      </nav>

      {/* Header */}
      <header className="team-header">
        <h3>Referral (Valid/Total): <span>1/2</span></h3>
      </header>

      {/* Members List */}
      <section className="members-section">
        <h2>Team 2 Members List</h2>
        <div className="members-list">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className={`member-card ${member.status === "Active" ? "active" : "inactive"}`}
            >
              <div className="member-info">
                <p className="member-id">{member.id}</p>
                <p className="member-date">{member.date}</p>
              </div>
              <div className={`status-box ${member.status === "Active" ? "green" : "red"}`}>
                {member.status}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Vivo Trading Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default TeamTwoLevel