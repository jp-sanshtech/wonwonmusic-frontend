import React, { useState } from "react";
import "../components/css/Login.css"; // Adjust path if needed
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include", // Important for session cookie
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        navigate("/admin-panel"); // Redirect on success
      } else {
        const data = await response.json();
        setError(data.error || "Login failed");
      }
    } catch (err) {
      setError("Something went wrong");
      console.error("Login error:", err);
    }
  };

  return (
    <div className="login-container">
      <h1>Admin Login</h1>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <div className="error-message">{error}</div>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
