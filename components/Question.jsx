import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"; // Correct import
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

const Question = ({ code, language, answers, correctAnswerIndex, onAnswerClick = ()=>{} }) => {
  const [selectedAnswerIndex, setSelectedAnswerIndex] = React.useState(null);
  const [isCorrect, setIsCorrect] = React.useState(null);


  const handleAnswerClick = (index) => {
    setSelectedAnswerIndex(index);
    onAnswerClick(index); // Pass answer click to parent component
    setIsCorrect(isCorrectAnswer(index)); // Check if answer is correct
  };

  // Function to determine if the selected answer is correct based on the correct answer index
  const isCorrectAnswer = (answerIndex) => {
    return answerIndex === correctAnswerIndex;
  };

  useEffect(() => {
    if (selectedAnswerIndex !== null) {
      // Delay showing the answer color for a brief period (e.g., 500ms)
      const timeoutId = setTimeout(() => {
        setIsCorrect(null); // Reset correctness state after delay
        setSelectedAnswerIndex(null); // Reset selected answer state
      }, 500);

      return () => clearTimeout(timeoutId); // Cleanup function to clear timeout on unmount
    }
  }, [selectedAnswerIndex]);
  return (
    <div>
      <div className="code-snippet">
        <SyntaxHighlighter language={language} style={prism} wrapLongLines={true}>
          {code}
        </SyntaxHighlighter>
      </div>
      <div className="answer-options">
       {/*  {answers.map((answer, index) => (
           <button key={index} onClick={() => onAnswerClick(index)}>{answer}</button>
         ))} */}

         {answers.map((answer, index) => (
          <button
            key={index}
            className={
              selectedAnswerIndex === index
                ? isCorrect === true
                  ? 'answer-button correct'
                  : isCorrect === false
                    ? 'answer-button incorrect'
                    : 'answer-button'
                : 'answer-button'
            }
            onClick={() => handleAnswerClick(index)}
          >
            {answer}
          </button>
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
  correctAnswerIndex: PropTypes.number.isRequired,
};

export default Question;