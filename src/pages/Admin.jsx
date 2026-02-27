import { useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate();

  const users = [
    { id: 1, name: "Dr. Sharma", role: "Doctor", status: "Active" },
    { id: 2, name: "Ravi Kumar", role: "Patient", status: "Active" },
    { id: 3, name: "Pharma Care", role: "Pharmacist", status: "Pending" },
  ];

  return (
    <div className="dashboard-container">

      {/* Sidebar */}
      <div className="sidebar admin-sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li>Dashboard</li>
          <li>Users</li>
          <li>Appointments</li>
          <li>Reports</li>
          <li>Settings</li>
        </ul>

        <button className="logout-btn" onClick={() => navigate("/")}>
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="dashboard-main">
        <h1>Welcome Admin 🧑‍💼</h1>

        {/* Stats Cards */}
        <div className="card-container">
          <div className="dash-card">
            <h3>Total Users</h3>
            <p>120</p>
          </div>

          <div className="dash-card">
            <h3>Total Doctors</h3>
            <p>25</p>
          </div>

          <div className="dash-card">
            <h3>Total Patients</h3>
            <p>80</p>
          </div>

          <div className="dash-card">
            <h3>Active Appointments</h3>
            <p>18</p>
          </div>
        </div>

        {/* User Management Section */}
        <div className="table-section">
          <h2>User Management</h2>

          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.role}</td>
                  <td>{user.status}</td>
                  <td>
                    <button className="approve-btn">Approve</button>
                    <button className="block-btn">Block</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* System Overview */}
        <div className="table-section">
          <h2>System Overview</h2>
          <p>✔ Secure encrypted login system</p>
          <p>✔ Role-based access control</p>
          <p>✔ Real-time consultation support</p>
          <p>✔ E-prescription & pharmacy integration</p>
        </div>

      </div>
    </div>
  );
}

export default Admin;