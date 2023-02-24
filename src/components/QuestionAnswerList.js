import React from "react";
import "../styles/qaList.css";
import {user} from './data'



function QuestionAnswerList(props) {
  return (
    <div className="quorabox">
      {props.qa.map((q) => (
        <div key={q.id} className="quorabox_info">
          <div className="post-top-left">
            <img
              className="post-profile-image"
              src={user.filter((u) => u.id === q.id)[0].photo}
              alt=""
            />
            <span className="post-user-name">
              {user.filter((u) => u.id === q.id)[0].username}
            </span>
          </div>
          <hr className="share-hr" />
          <div className="share-box">
            <div className="share-options">
              <h2>{q.question}</h2>
              <p>{q.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default QuestionAnswerList;
