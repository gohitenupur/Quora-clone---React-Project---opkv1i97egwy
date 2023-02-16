import React from "react";
import QuestionList from "./QuestionList";
import QuestionAnswerList from "./QuestionAnswerList";
import Header from "./Header";

function QAPage() {
  return (
    <>
      <Header />
      <div className="qa-page">
        <div className="left-panel">
          <QuestionAnswerList />
        </div>
        <div className="right-panel">
          <QuestionList />
        </div>
      </div>
    </>
  );
}

export default QAPage;
