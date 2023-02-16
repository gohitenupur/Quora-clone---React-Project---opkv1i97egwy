import React from "react";
import "../styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import AddQuestion from "./AddQuestion";
import Header from "./Header";
// import AddAnswer from "./AddAnswer";
// import LoginPage from "./LoginPage";
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
      {/* <Header /> */}
      {/* <AddQuestion /> */}
      {/* <AddAnswer /> */}
      {/* <LoginPage /> */}
      {/* <QAPage /> */}
    </div>
  );
};

export default App;
