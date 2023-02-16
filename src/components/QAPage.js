import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import QuestionList from "./QuestionList";
import QuestionAnswerList from "./QuestionAnswerList";
import AddQuestion from "./AddQuestion";
import AddAnswer from "./AddAnswer";

function QAPage() {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
      category: "Web Development",
      tags: ["React", "JavaScript"]
    },
    {
      id: 2,
      question: "What is Redux?",
      answer:
        "Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments, and are easy to test.",
      category: "Web Development",
      tags: ["Redux", "JavaScript"]
    }
    // more questions can be added here
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  // filter the questions based on the search query
  const filteredQuestions = questions.filter((q) =>
    q.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="qa-page">
      <div className="left-panel">
        <QuestionAnswerList questions={filteredQuestions} />
      </div>
      <div className="right-panel">
        <Switch>
          <Route exact path="/">
            <QuestionList
              questions={questions}
              setSearchQuery={setSearchQuery}
            />
          </Route>
          <Route path="/add-question">
            <AddQuestion setQuestions={setQuestions} />
          </Route>
          <Route path="/add-answer/:id">
            <AddAnswer questions={questions} setQuestions={setQuestions} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default QAPage;
