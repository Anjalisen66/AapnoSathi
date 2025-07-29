import React, { useState } from "react";
import "./Login.css"; // Ensure this file exists
import hexImage from "../assets/hexagon.png"; // Correct relative path
import axios from "axios";
import HexagonGrid from "./Hexagongrid";

const Login = () => {
  // State variables for form inputs and error messages
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const AUTH_URL=process.env.REACT_APP_AUTH_URL

  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent page refresh
    setLoading(true);

    try {
      const response = await axios.post(`${AUTH_URL}/login`, {
        name: username,
        password,
      });

      const data = response.data;
      setLoading(false);
      console.log(data);

      if (data.successMessage) {
        alert(data.successMessage);
        setMessage(data.successMessage);

        // Redirect the user to the home page after 2 seconds
        setTimeout(() => {
          window.location.href = data.redirect; // Use the 'redirect' field from the API
        }, 2000);
      } else if (data.errorMessage) {
        alert(data.errorMessage);
        setMessage(data.errorMessage);
      }
    } catch (error) {
      setLoading(false);
      setMessage("An error occurred. Please try again.");
      alert(message);
      console.error("Login Error:", error);
    }

    // Validation logic
    if (!username || !password) {
      setError("Both username and password are required.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    // Clear errors and proceed
    setError("");
    console.log("Form submitted with:", { username, password });

    // You can handle backend API call here
  };

  return (
    <div className="login-box">
      {/* Hexagon Gallery at the top */}
      <div
        className="hexagon-gallery"
        style={{
          backgroundImage: `url(${hexImage})`,
          backgroundSize: "contain",
          backgroundPosition: "center top",
          height: "200px",
        }}
      ></div>
      {/* <HexagonGrid /> */}

      {/* Login Form */}
      <div className="login-form text-[#693303]">
        <form onSubmit={handleLogin}>
          <h2 className="text-[#693303]">LOGIN</h2>
          <input
            type="text"
            placeholder="Username"
            className="login-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="error-message">{error}</p>}{" "}
          {/* Display error */}
          {/* <button className="login-btn" onClick={handleLogin}>
          Login
        </button> */}
          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
          {/* <p className="forgot-password">Forgot Password?</p> */}
        </form>
      </div>

      {/* Sign-Up Text Adjusted */}
      <div className="signup-container">
        <p className="signup-text">
          Want to create an account? <a href="/signup">SIGN UP</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
