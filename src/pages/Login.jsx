import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";   // ✅ Import Login CSS

function Login() {
  const navigate = useNavigate();

  const [loginType, setLoginType] = useState("email");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [role, setRole] = useState("");

  const handleLogin = () => {
    if (!role) {
      alert("Please select role");
      return;
    }

    if (loginType === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(email)) {
        alert("Enter valid email");
        return;
      }

      if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return;
      }
    }

    if (loginType === "phone") {
      const phonePattern = /^[0-9]{10}$/;

      if (!phonePattern.test(phone)) {
        alert("Phone must be 10 digits");
        return;
      }

      if (otp.length !== 6) {
        alert("OTP must be 6 digits");
        return;
      }
    }

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("role", role);

    navigate(`/${role}`);
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Welcome Back 👋</h2>
        <p className="subtitle">Login to continue</p>

        <select
          className="input-field"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">Select Role</option>
          <option value="doctor">Doctor</option>
          <option value="patient">Patient</option>
          <option value="admin">Admin</option>
          <option value="pharmacist">Pharmacist</option>
        </select>

        <div className="login-toggle">
          <button
            className={loginType === "email" ? "active" : ""}
            onClick={() => setLoginType("email")}
          >
            Email
          </button>
          <button
            className={loginType === "phone" ? "active" : ""}
            onClick={() => setLoginType("phone")}
          >
            Phone
          </button>
        </div>

        {loginType === "email" && (
          <>
            <input
              type="email"
              placeholder="Enter Email"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Enter Password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </>
        )}

        {loginType === "phone" && (
          <>
            <input
              type="text"
              placeholder="Enter Phone Number"
              className="input-field"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <input
              type="text"
              placeholder="Enter OTP"
              className="input-field"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </>
        )}

        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;