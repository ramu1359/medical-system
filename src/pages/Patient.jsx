import { useNavigate } from "react-router-dom";

function Patient() {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <div className="top">
        <h2>Patient Dashboard</h2>
        <button onClick={() => navigate("/")}>Logout</button>
      </div>
      <p>Book appointments and view records.</p>
    </div>
  );
}

export default Patient;