

import React, { useState } from "react";
import '../App.css'

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { username, password } = formData;

    const storedData = localStorage.getItem(username);
    if (!storedData) {
      setError("Username does not exist. Please register.");
      setSuccess("");
      return;
    }

    const { password: storedPassword } = JSON.parse(storedData);
    if (storedPassword !== password) {
      setError("Incorrect password.");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess(`Welcome, ${username}!`);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
        style={{ display: "block", marginBottom: "10px", width: "100%" }}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        style={{ display: "block", marginBottom: "10px", width: "100%" }}
      />
      <button onClick={handleSubmit} style={{ padding: "10px 20px" }}>
        Login
      </button>
      <p>
        Don't have an account? <a href="/">Register here</a>
      </p>
    </div>
  );
};

export default Login;
