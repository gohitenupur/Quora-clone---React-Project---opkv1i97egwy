import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddQuestion from "./components/AddQuestion";
import RegisterPage from "./components/RegisterPage";
import AddAnswer from "./components/AddAnswer";
import LoginPage from "./components/LoginPage";
import Home from "./components/Home";



const App = () => {
  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/addQ" element={<AddQuestion />} />
          <Route path="/addAns" element={<AddAnswer/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
