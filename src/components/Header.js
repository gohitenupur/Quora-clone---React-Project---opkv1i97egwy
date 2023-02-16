import React from "react";

const Header = () => {
  return (
    <nav>
      <h1>Quora</h1>
      <input type="text" placeholder="Search for questions" />
      <button>Add Question</button>
      <button>Answer Question</button>
      <button>Login</button>
    </nav>
  );
};

export default Header;
