import React from "react";

function QuestionList() {
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
  return <>QuestionList</>;
}

export default QuestionList;
