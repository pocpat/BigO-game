//import React from 'react';
import PropTypes from 'prop-types';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"; // Correct import
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

const Question = ({ code, language, answers }) => {
  return (
    <div>
      <div className="code-snippet">
        <SyntaxHighlighter language={language} style={prism} wrapLongLines={true}>
          {code}
        </SyntaxHighlighter>
      </div>
      <div className="answer-options">
        {answers.map((answer, index) => (
          <button key={index}>{answer}</button>
        ))}
      </div>
    </div>
  );
};

Question.propTypes = {
  code: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Question;