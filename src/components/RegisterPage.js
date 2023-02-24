import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: send request to server API to register new user
    // if registration succeeds, redirect user to the main page
    if (!username || !password || !email) {
      window.alert("all fields are required");
      navigate("/register");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="container">
      <h1>Register</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        <label>
          Email :
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <button type="submit">Register</button>
        <Link to="/">Already registered user please login</Link>
      </form>
    </div>
  );
}

export default RegisterPage;
