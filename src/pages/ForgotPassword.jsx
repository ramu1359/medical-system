import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css"; // reuse same styling

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your registered email");
      return;
    }

    alert("Password reset link sent to your email!");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Reset Password 🔐</h2>
        <p className="subtitle">
          Enter your registered email to receive reset link
        </p>

        <input
          type="email"
          placeholder="Enter Email"
          className="input-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className="login-button" onClick={handleSubmit}>
          Send Reset Link
        </button>

        <p className="register-link">
          Remember password? <Link to="/login">Back to Login</Link>
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;