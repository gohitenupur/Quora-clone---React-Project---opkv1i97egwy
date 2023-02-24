import React from "react";
import QuestionList from "./QuestionList";
import "../styles/qaPage.css";
import QuestionAnswerList from "./QuestionAnswerList";
import { qa } from "./data";

function QAPage() {
  return (
    <div className="qa-page">
      <div className="left-panel">
        <QuestionAnswerList qa={qa} />
      </div>
      <div className="right-panel">
        <QuestionList />
      </div>
    </div>
  );
}

export default QAPage;
