import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Virtual Medical Consultation System</h1>
        <p>Book Appointments • Get E-Prescriptions • Access Records</p>

        <Link to="/login">
          <button className="btn">Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;