import React from "react";
// import "../styles/qaList.css";
import { user, qa } from "../data";

function QuestionAnswerList() {
  return (
    <div className="quorabox">
      <div className="quorabox_info">
        <div className="post-top-left">
          <img
            className="post-profile-image"
            // src={user.filter((u) => u.id===qa.id)[0].photo}
            alt=""
          />
          <span className="post-user-name">
            name
            {/* {user.filter((u) => u.id === qa.id)[0].username} */}
          </span>
        </div>
        <hr className="share-hr" />
        <div className="share-box">
          <div className="share-options">
            <h2>Question</h2>
            <p>Answer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionAnswerList;
