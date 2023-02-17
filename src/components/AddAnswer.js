import React, { useState } from "react";
import "../styles/addAns.css";
// import { useNavigate } from "react-router-dom";

function AddAnswer() {
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const [answer, setAnswer] = useState([]);
  // // const navigate = useNavigate();
  // const questions = [
  //   {
  //     id: "1",
  //     answeredBy: "kamal rastogi",
  //     questionedBy: "arun tiwari",
  //     question: "What is the famous food of Agra?",
  //     answer: "Petha is the famous sweet of Agra"
  //   }
  // ];

  const handleAddAnswer = (event) => {
    event.preventDefault();
    // if (selectedQuestion === "" || answer.trim() === "") {
    //   alert("Please select a question and enter a valid answer.");
    // } else {
    //   // update the answer of the selected question
    //   const updatedQuestions = questions.map((q) =>
    //     q.id === selectedQuestion ? { ...q, answer: answer.trim() } : q
    //   );
    //   // update the questions array in the parent component
    //   setQuestions(updatedQuestions);
    //   // redirect to the main page
    //   // navigate("/");
    // }
  };

  const handleCancel = () => {
    // redirect to the main page
    // navigate("/");
  };

  return (
    <div className="add-answer">
      <h2>Add Answer</h2>
      <form onSubmit={handleAddAnswer}>
        <label htmlFor="question">Question:</label>
        <select
          id="question"
          value={selectedQuestion}
          onChange={(event) => setSelectedQuestion(event.target.value)}
        >
          <option value="">Select a question</option>
          {/* {questions.map((q) => (
            <option key={q.id} value={q.id}>
              {q.question}
            </option>
          ))} */}
        </select>
        <label htmlFor="answer">Answer:</label>
        <textarea
          id="answer"
          value={answer}
          onChange={(event) => setAnswer(event.target.value)}
        ></textarea>
        <div className="button_container">
          <button type="submit">Add Answer</button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddAnswer;
