import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    // Mock registration logic
    if (!username || !password) {
      setError("Please fill in all fields");
      return;
    }

    // Simulate successful registration
    localStorage.setItem(
      "registeredUser",
      JSON.stringify({ username, password })
    );
    navigate("/login");
  };

  return (
    <div className="login-main-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div className="use-for-distance">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="use-for-distance">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button className="use-for-distance" type="submit">
          Register
        </button>
      </form>
      <p>
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
}

export default Register;
