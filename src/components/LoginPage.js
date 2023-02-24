import React from "react";
import { useState } from "react";
import "../styles/login.css";
import { Link, useNavigate } from "react-router-dom";
import {user} from './data'

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleUsername(event) {
    setUsername(event.target.value);
  }

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   const userMatch = user.find(
      (u) => u.username === username && u.password === password
    );
    if (userMatch) {
      // If user is found, redirect to the main page
      navigate("/home");
    } else {
      // If user is not found, display error message
      window.alert("Invalid username or password.");
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <p>For test username: nupur ,password :12345</p>
      <form className="form" onSubmit={handleSubmit}>
        <label className="input">
          Username:
          <input type="text" value={username} onChange={handleUsername} />
        </label>
        <br />
        <label className="input">
          Password:
          <input type="password" value={password} onChange={handlePassword} />
        </label>
        <br />
        <button type="submit">Login</button>
        <p>New user Please <Link to="/register">Register</Link></p>
      </form>
    </div>
  );
}

export default LoginPage;
