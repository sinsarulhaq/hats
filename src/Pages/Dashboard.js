import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
function Dashboard() {
  const { user } = useSelector((state) => state.data);
  const navigate = useNavigate();
  const redirect = () => {
    navigate("/settings");
  };
  return (
    <div className="dashboard">
      <div className="heading">User Dashboard</div>
      <div className="dashboard-details">
        <h3>name: {user ? user.displayName : ""}</h3>
        <h3>email: {user ? user.email : ""}</h3>
        <h3>image:</h3> <img className="img" src={user ? user.photoURL : ""} alt="" />
      </div>
      <div className="edit">
        <button onClick={redirect}>Edit</button>
      </div>
    </div>
  );
}

export default Dashboard;
