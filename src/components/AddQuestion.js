import React, { useState } from "react";
import "../styles/addQ.css";
// import { useNavigate } from "react-router-dom";

function AddQuestion() {
  const [question, setQuestion] = useState("");
  // const navigate = useNavigate();

  function handleAddQuestion(event) {
    event.preventDefault();
    // if (question.trim() === "") {
    //   alert("Please enter a valid question.");
    // } else {
    //   // create a new question object with a unique ID
    //   const newQuestion = {
    //     id: new Date().getTime(),
    //     question: question.trim(),
    //     answer: "",
    //     category: "General",
    //     tags: []
    //   };
    //   // add the new question to the questions array
    //   setQuestion((prevQuestions) => [...prevQuestions, newQuestion]);
    //   // redirect to the main page
    // navigate("/");
    // }
  }

  const handleCancel = () => {
    // redirect to the main page
    // navigate("/");
  };

  return (
    <div className="add-question">
      <h2>Add Question</h2>

      <form onSubmit={handleAddQuestion}>
        <label htmlFor="question">Question:</label>
        <input
          className="input_text"
          type="text"
          id="question"
          placeholder="Type Your Question here ....."
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
        />
        <div className="button-container">
          <button type="submit">Add Question</button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddQuestion;
