import { useNavigate } from "react-router-dom";

function Pharmacist() {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <div className="top">
        <h2>Pharmacist Dashboard</h2>
        <button onClick={() => navigate("/")}>Logout</button>
      </div>
      <p>Manage e-prescriptions and orders.</p>
    </div>
  );
}

export default Pharmacist;