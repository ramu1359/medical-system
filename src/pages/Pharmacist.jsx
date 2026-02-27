import { useNavigate } from "react-router-dom";

function Pharmacist() {
  const navigate = useNavigate();

  const prescriptions = [
    { id: 1, patient: "Ravi Kumar", medicine: "Paracetamol", status: "Pending" },
    { id: 2, patient: "Anjali Sharma", medicine: "Amoxicillin", status: "Completed" },
  ];

  const stock = [
    { id: 1, name: "Paracetamol", quantity: 120 },
    { id: 2, name: "Amoxicillin", quantity: 60 },
    { id: 3, name: "Vitamin D", quantity: 200 },
  ];

  return (
    <div className="dashboard-container">

      {/* Sidebar */}
      <div className="sidebar">
        <h2>Pharmacy Panel</h2>
        <ul>
          <li>Dashboard</li>
          <li>Prescriptions</li>
          <li>Orders</li>
          <li>Inventory</li>
          <li>Reports</li>
        </ul>

        <button className="logout-btn" onClick={() => navigate("/")}>
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="dashboard-main">
        <h1>Welcome Pharmacist 💊</h1>

        {/* Cards */}
        <div className="card-container">
          <div className="dash-card">
            <h3>Pending Prescriptions</h3>
            <p>4</p>
          </div>

          <div className="dash-card">
            <h3>Completed Orders</h3>
            <p>12</p>
          </div>

          <div className="dash-card">
            <h3>Available Medicines</h3>
            <p>38</p>
          </div>
        </div>

        {/* Prescription Section */}
        <div className="table-section">
          <h2>E-Prescriptions</h2>

          <table>
            <thead>
              <tr>
                <th>Patient</th>
                <th>Medicine</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {prescriptions.map((item) => (
                <tr key={item.id}>
                  <td>{item.patient}</td>
                  <td>{item.medicine}</td>
                  <td>{item.status}</td>
                  <td>
                    <button className="action-btn">Mark Complete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Inventory Section */}
        <div className="table-section">
          <h2>Medicine Inventory</h2>

          <table>
            <thead>
              <tr>
                <th>Medicine Name</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {stock.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

export default Pharmacist;