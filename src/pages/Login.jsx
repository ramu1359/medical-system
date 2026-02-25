import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState("");

  const handleLogin = () => {
    if (role === "doctor") navigate("/doctor");
    else if (role === "patient") navigate("/patient");
    else if (role === "admin") navigate("/admin");
    else if (role === "pharmacist") navigate("/pharmacist");
    else alert("Please select role");
  };

  return (
    <div className="login">
      <div className="login-box">
        <h2>Login</h2>

        <select onChange={(e) => setRole(e.target.value)}>
          <option value="">Select Role</option>
          <option value="doctor">Doctor</option>
          <option value="patient">Patient</option>
          <option value="admin">Admin</option>
          <option value="pharmacist">Pharmacist</option>
        </select>

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;