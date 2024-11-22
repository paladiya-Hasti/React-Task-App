

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css'

const Register = () => {
  const [formData, setFormData] = useState({ username: "", password: "" , email: ""});
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { username, password , email} = formData;

    if (!username || !password || !email) {
      setError("All fields are required.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    if (email.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }


    if (localStorage.getItem(username)) {
      setError("Username already exists. Try logging in.");
      return;
    }

    localStorage.setItem(username, JSON.stringify({ password }));
    setError("");
    alert("Registration successful! Redirecting to login.");
    navigate("/");
  };

  return (
   <form  style={{marginTop:"100px",marginBottom:"100px"}}>
     <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }} className="auth-container">
      <h2>Register</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
        style={{ display: "block", marginBottom: "10px", width: "100%" }}
      />
       <input
        type="email"
        name="email"
        placeholder="email"
        value={formData.email}
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
      <button onClick={handleSubmit} className="btn" style={{marginTop:"20px"}}>
        Register
      </button>
      <p style={{marginTop:"20px"}}>
        Already have an account? <a href="/login">Login here</a>
      </p>
    </div>
   </form>
  );
};

export default Register;
