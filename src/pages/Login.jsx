import React, { useState } from "react";
import "../styles/login.css";
import Navbar from '../component/Navbar.jsx';
import Footer from '../component/Footer.jsx';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Logging in...");
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        setStatus("Login successful!");
      } else {
        setStatus("Login failed.");
      }
    } catch (error) {
      setStatus("An error occurred.");
    }
  };

  return (
    <div>
    <Navbar /> 
    <div className="login_container"> 
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input className="login"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input className="login"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="login_button">Login</button>
      </form>
      <p>{status}</p>
    </div>
    <Footer /> 
    </div>
  );
};

export default LoginForm;
