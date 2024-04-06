import React from "react";
import questions from "./data";
import Question from "./Question";
const Questions = () => {
  return (
    <>
      {questions.map((q) => {
        const { id, title, info } = q;
        return <Question key={id} title={title} info={info} />;
      })}
    </>
  );
};

export default Questions;
