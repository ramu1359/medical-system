import { useNavigate } from "react-router-dom";

function Doctor() {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <div className="top">
        <h2>Doctor Dashboard</h2>
        <button onClick={() => navigate("/")}>Logout</button>
      </div>
      <p>Manage consultations and prescriptions.</p>
    </div>
  );
}

export default Doctor;