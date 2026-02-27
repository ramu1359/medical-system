import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <h1>Virtual Medical Consultation System</h1>
        <p>
          Book Appointments • Get E-Prescriptions • Access Medical Records •
          Online Pharmacy
        </p>

        <div className="hero-buttons">
          <Link to="/login">
            <button className="primary-btn">Login</button>
          </Link>

          <Link to="/register">
            <button className="secondary-btn">Register</button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Our Services</h2>

        <div className="feature-cards">
          <div className="card">
            <h3>📅 Online Appointments</h3>
            <p>Schedule consultations with certified doctors anytime.</p>
          </div>

          <div className="card">
            <h3>💊 E-Prescriptions</h3>
            <p>Receive digital prescriptions instantly after consultation.</p>
          </div>

          <div className="card">
            <h3>🧾 Medical Records</h3>
            <p>Access lab reports and medical history securely.</p>
          </div>

          <div className="card">
            <h3>🚚 Pharmacy Support</h3>
            <p>Order medicines online and track delivery status.</p>
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="roles">
        <h2>User Roles</h2>

        <div className="role-cards">
          <div className="role-card">
            <h3>👤 Patient</h3>
            <p>Book appointments, attend video consultations, and manage records.</p>
          </div>

          <div className="role-card">
            <h3>👨‍⚕️ Doctor</h3>
            <p>Conduct virtual consultations and issue e-prescriptions.</p>
          </div>

          <div className="role-card">
            <h3>🧑‍💼 Admin</h3>
            <p>Manage users, monitor system performance and ensure security.</p>
          </div>

          <div className="role-card">
            <h3>💊 Pharmacist</h3>
            <p>Process prescriptions and manage medicine inventory.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>✔ Secure and encrypted data</li>
          <li>✔ 24/7 access to healthcare</li>
          <li>✔ Easy to use interface</li>
          <li>✔ Fast appointment scheduling</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Virtual Medical Consultation System | All Rights Reserved</p>
      </footer>

    </div>
  );
}

export default Home;