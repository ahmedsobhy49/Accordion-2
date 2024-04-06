import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { HiOutlineMinus } from "react-icons/hi";

const Question = ({ title, info }) => {
  const [isAnswerShowed, setIsAnserShowed] = useState(false);
  function switchState() {
    setIsAnserShowed((prev) => !prev);
  }

  return (
    <div className="question">
      <header>
        <h5>{title}</h5>
        <button className="question-btn" onClick={switchState}>
          {isAnswerShowed ? <HiOutlineMinus /> : <BsPlusLg />}
        </button>
      </header>
      {isAnswerShowed ? <p>{info}</p> : ""}
    </div>
  );
};

export default Question;
