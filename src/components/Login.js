import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // Mock authentication logic
    if (!username || !password) {
      setError("Please fill in all fields");
      return;
    }

    const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (!registeredUser) {
      setError("Not registered");
      return;
    }

    if (registeredUser.username !== username) {
      setError("Not registered");
      return;
    }

    if (registeredUser.password !== password) {
      setError("Password mismatch");
      return;
    }

    onLogin();
    navigate("/todos");
  };

  return (
    <div className="login-main-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit" className="use-for-distance">
          Login
        </button>
      </form>
      <p>
        Don't have an account? <a href="/register">Register</a>
      </p>
    </div>
  );
}

export default Login;
