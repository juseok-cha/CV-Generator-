// import React from "react";

function PreMotorola() {
  const copyToClipboard = () => {
    return console.log("copied");
  };
  return (
    <div className="motorola">
      <div className="pre">
        <h2>Pre Motorola</h2>
        <div className="qna">
          <h3>1. What are our learning goals in this visit?</h3>
          <textarea className="textarea"></textarea>
        </div>
        <div className="qna">
          <h3>2. What is the customer’s role in this visit?</h3>
          <textarea></textarea>
        </div>
        <div className="qna">
          <h3>3. What theories will we use in this visit?</h3>
          <textarea></textarea>
        </div>
        <div className="qna">
          <h3>4. What skills will we train in this visit?</h3>
          <textarea></textarea>
        </div>
        <div className="qna">
          <h3>5. How does this visit help us to get to our goal?</h3>
          <textarea></textarea>
        </div>
      </div>
      <button className="copytoclipboard" onClick={copyToClipboard}>
        Copy to clipboard
      </button>
    </div>
  );
}

export default PreMotorola;

/* 
1. What are our learning goals in this visit?
2. What is the customer’s role in this visit?
3. What theories will we use in this visit?
4. What skills will we train in this visit?
5. How does this visit help us to get to our goal?



*/
