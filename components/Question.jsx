//import React from 'react';
import PropTypes from 'prop-types';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"; // Correct import
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";
//import quizData from '../src/quizeData';
const Question = ({ code, language, answers, onAnswerClick = ()=>{} }) => {
  return (
    <div>
      <div className="code-snippet">
        <SyntaxHighlighter language={language} style={prism} wrapLongLines={true}>
          {code}
        </SyntaxHighlighter>
      </div>
      <div className="answer-options">
        {answers.map((answer, index) => (
          <button key={index} onClick={() => onAnswerClick(index)}>{answer}</button>
        ))}
      </div>
    </div>
  );
};

Question.propTypes = {
  code: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAnswerClick: PropTypes.func.isRequired,
};

export default Question;