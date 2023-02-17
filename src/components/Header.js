import React from "react";
import "../styles/header.css";
// import MaterialIcon from "material-icons-react";
function Header() {
  return (
    <>
      <div className="header_container">
        <h1 className="logo">Quora</h1>
        <div className="header_search">
          {/* <MaterialIcon /> */}
          <input type="text" placeholder="Search for questions" />
        </div>
        <div className="header_btn">
          <button>Add Question</button>
          <button>Answer Question</button>
          <button>Login</button>
        </div>
      </div>
    </>
  );
}

export default Header;
