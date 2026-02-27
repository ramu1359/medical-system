import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [role, setRole] = useState("");
  const [loginType, setLoginType] = useState("email"); // email or phone
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (!role) {
      alert("Please select role");
      return;
    }

    if (loginType === "email") {
      if (!email || !password) {
        alert("Please enter email and password");
        return;
      }
    } else {
      if (!phone || !otp) {
        alert("Please enter phone and OTP");
        return;
      }
    }

    // Role-based navigation
    if (role === "doctor") navigate("/doctor");
    else if (role === "patient") navigate("/patient");
    else if (role === "admin") navigate("/admin");
    else if (role === "pharmacist") navigate("/pharmacist");
  };

  return (
    <div className="login">
      <div className="login-box">
        <h2>Online Medical System Login</h2>

        {/* Role Selection */}
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="">Select Role</option>
          <option value="doctor">Doctor</option>
          <option value="patient">Patient</option>
          <option value="admin">Admin</option>
          <option value="pharmacist">Pharmacist</option>
        </select>

        {/* Login Type Toggle */}
        <div className="login-toggle">
          <button
            className={loginType === "email" ? "active" : ""}
            onClick={() => setLoginType("email")}
          >
            Email Login
          </button>
          <button
            className={loginType === "phone" ? "active" : ""}
            onClick={() => setLoginType("phone")}
          >
            Phone Login
          </button>
        </div>

        {/* Email Login */}
        {loginType === "email" && (
          <>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>
          </>
        )}

        {/* Phone Login */}
        {loginType === "phone" && (
          <>
            <input
              type="tel"
              placeholder="Enter Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />

            <button className="otp-btn">Send OTP</button>
          </>
        )}

        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>

        <p className="forgot">Forgot Password?</p>
      </div>
    </div>
  );
}

export default Login;