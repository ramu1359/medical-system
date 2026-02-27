import { useNavigate } from "react-router-dom";

function Patient() {
  const navigate = useNavigate();

  const appointments = [
    { id: 1, doctor: "Dr. Sharma", date: "26 Feb 2026", status: "Confirmed" },
    { id: 2, doctor: "Dr. Reddy", date: "28 Feb 2026", status: "Pending" },
  ];

  const records = [
    { id: 1, title: "Blood Test Report", date: "20 Feb 2026" },
    { id: 2, title: "X-Ray Report", date: "15 Feb 2026" },
  ];

  return (
    <div className="dashboard-container">

      {/* Sidebar */}
      <div className="sidebar">
        <h2>Patient Panel</h2>
        <ul>
          <li>Dashboard</li>
          <li>Appointments</li>
          <li>Medical Records</li>
          <li>Prescriptions</li>
          <li>Profile</li>
        </ul>

        <button className="logout-btn" onClick={() => navigate("/")}>
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="dashboard-main">
        <h1>Welcome Patient 👤</h1>

        {/* Cards */}
        <div className="card-container">
          <div className="dash-card">
            <h3>Upcoming Appointments</h3>
            <p>2</p>
          </div>

          <div className="dash-card">
            <h3>Total Prescriptions</h3>
            <p>5</p>
          </div>

          <div className="dash-card">
            <h3>Reports Available</h3>
            <p>3</p>
          </div>
        </div>

        {/* Appointment Section */}
        <div className="table-section">
          <div className="section-header">
            <h2>Upcoming Appointments</h2>
            <button className="primary-btn">Book Appointment</button>
          </div>

          <table>
            <thead>
              <tr>
                <th>Doctor</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appt) => (
                <tr key={appt.id}>
                  <td>{appt.doctor}</td>
                  <td>{appt.date}</td>
                  <td>{appt.status}</td>
                  <td>
                    <button className="action-btn">Join</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Medical Records Section */}
        <div className="table-section">
          <h2>Medical Records</h2>

          <table>
            <thead>
              <tr>
                <th>Report Name</th>
                <th>Date</th>
                <th>Download</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record) => (
                <tr key={record.id}>
                  <td>{record.title}</td>
                  <td>{record.date}</td>
                  <td>
                    <button className="download-btn">Download</button>
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

export default Patient;