import { useNavigate } from "react-router-dom";

function Doctor() {
  const navigate = useNavigate();

  const appointments = [
    { id: 1, name: "Ravi Kumar", time: "10:00 AM", status: "Pending" },
    { id: 2, name: "Anjali Sharma", time: "11:30 AM", status: "Completed" },
    { id: 3, name: "Rahul Verma", time: "1:00 PM", status: "Pending" },
  ];

  return (
    <div className="dashboard-container">

      {/* Sidebar */}
      <div className="sidebar">
        <h2>Doctor Panel</h2>
        <ul>
          <li>Dashboard</li>
          <li>Appointments</li>
          <li>Patients</li>
          <li>Prescriptions</li>
          <li>Reports</li>
        </ul>
        <button className="logout-btn" onClick={() => navigate("/")}>
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="dashboard-main">
        <h1>Welcome Doctor 👨‍⚕️</h1>

        {/* Cards */}
        <div className="card-container">
          <div className="dash-card">
            <h3>Total Appointments</h3>
            <p>24</p>
          </div>

          <div className="dash-card">
            <h3>Total Patients</h3>
            <p>18</p>
          </div>

          <div className="dash-card">
            <h3>Today's Earnings</h3>
            <p>₹4,500</p>
          </div>
        </div>

        {/* Appointment Table */}
        <div className="table-section">
          <h2>Today's Appointments</h2>
          <table>
            <thead>
              <tr>
                <th>Patient Name</th>
                <th>Time</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appt) => (
                <tr key={appt.id}>
                  <td>{appt.name}</td>
                  <td>{appt.time}</td>
                  <td>{appt.status}</td>
                  <td>
                    <button className="action-btn">Start</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

export default Doctor;