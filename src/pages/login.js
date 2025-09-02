import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <img
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt="avatar"
          className="avatar"
        />
        <h2>Login</h2>
        <form>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>
          <button type="submit" className="btn">Login</button>
        </form>
        <p>
          Don’t have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
