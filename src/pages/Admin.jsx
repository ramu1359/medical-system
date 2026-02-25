import { useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <div className="top">
        <h2>Admin Dashboard</h2>
        <button onClick={() => navigate("/")}>Logout</button>
      </div>
      <p>Manage users and system settings.</p>
    </div>
  );
}

export default Admin;