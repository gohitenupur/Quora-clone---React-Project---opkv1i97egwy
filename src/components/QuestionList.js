import React from "react";
import { qa } from "../data";
function QuestionList() {
  return (
    <div>
      <h2>List of Questions</h2>
      <ul>
        {qa.map((q) => (
          <li key={q.id}>{q.question}</li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionList;
