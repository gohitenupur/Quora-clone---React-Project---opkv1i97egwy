import React, { useState } from "react";
import "../styles/header.css";
import { useNavigate } from "react-router-dom";
import { qa } from "./data";
import QuestionAnswerList from "./QuestionAnswerList";
function Header() {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredQA = qa.filter(
    (q) =>
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  function handleAddQ() {
    navigate("/addQ");
  }
  function hendleAnsQ() {
    navigate("/addAns");
  }
  function hendleLogout() {
    navigate("/");
  }

  return (
    <>
      <div className="header_container">
        <h1 className="logo">Quora</h1>
        <div className="header_search">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          />
          {/* <QuestionAnswerList qa={filteredQA} /> */}
        </div>
        <div className="header_btn">
          <button onClick={handleAddQ}>Add Question</button>
          <button onClick={hendleAnsQ}>Answer Question</button>
          <button onClick={hendleLogout}>Log out</button>
        </div>
      </div>
    </>
  );
}

export default Header;
