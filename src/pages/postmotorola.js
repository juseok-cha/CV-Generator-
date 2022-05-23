import React from "react";

function PostMotorola() {
  const allText = (e) => {
    e.target.select();
  };
  const copyToClipboard = () => {
    const preone = document.getElementsByClassName("pre-oned");
    return console.log(preone);
  };

  return (
    <div className="post motorola">
      <h2>Post Motorola</h2>
      <div className="qna pre-oned">
        <h3>1. What went well?</h3>
        <textarea className="textarea" onClick={allText}></textarea>
      </div>
      <div className="qna">
        <h3>2. What went wrong?</h3>
        <textarea></textarea>
      </div>
      <div className="qna">
        <h3>3. What did we learn?</h3>
        <textarea></textarea>
      </div>
      <div className="qna">
        <h3>4. What will we do better next time?</h3>
        <textarea></textarea>
      </div>
      <button className="copytoclipboard" onClick={copyToClipboard}>
        {" "}
        Copy to clipboard{" "}
      </button>
    </div>
  );
}

export default PostMotorola;
