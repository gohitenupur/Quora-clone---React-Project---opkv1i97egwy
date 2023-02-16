import React from "react";
import "../styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import AddQuestion from "./AddQuestion";
// import RegisterPage from "./RegisterPage";
// import AddAnswer from "./AddAnswer";
// import LoginPage from "./LoginPage";
import Header from "./Header";
// import QAPage from "./QAPage";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          {/* <Route path="/AddQuestion" element={<AddQuestion />} /> */}
        </Routes>
      </BrowserRouter>
      {/* <QAPage /> */}
      {/* <AddQuestion /> */}
      {/* <AddAnswer /> */}
      {/* <LoginPage /> */}
      {/* <RegisterPage /> */}
    </div>
  );
};

export default App;
