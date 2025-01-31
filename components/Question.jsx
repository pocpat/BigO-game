import React, {useEffect,useMemo } from 'react';
import PropTypes from 'prop-types';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"; // Correct import
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

const Question = ({ code, language, answers, correctAnswerIndex, onAnswerClick = ()=>{} }) => {
  const [selectedAnswerIndex, setSelectedAnswerIndex] = React.useState(null);
  const [isCorrect, setIsCorrect] = React.useState(null);


  // const handleAnswerClick = (index) => {
  //   setSelectedAnswerIndex(index);
  //   onAnswerClick(index); // Pass answer click to parent component
  //   setIsCorrect(isCorrectAnswer(index)); // Check if answer is correct
  // };


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
// ================================================

  // Function to shuffle array
  const shuffleArray = (array) => {
    return array
      .map((value, index) => ({ value, index })) // Store original index
      .sort(() => Math.random() - 0.5) // Shuffle
      .map(({ value }) => value); // Extract shuffled values
  };

 // Memoized shuffled answers and correct answer index
 const { shuffledAnswers, newCorrectIndex } = useMemo(() => {
  const shuffled = shuffleArray(answers);
  const newIndex = shuffled.indexOf(answers[correctAnswerIndex]); // Find new correct index
  return { shuffledAnswers: shuffled, newCorrectIndex: newIndex };
}, [answers, correctAnswerIndex]);

const handleAnswerClick = (index) => {
  setSelectedAnswerIndex(index);
  onAnswerClick(index === newCorrectIndex); // Pass answer check result
  setIsCorrect(index === newCorrectIndex);
};
return (
  <div>
    <div className="code-snippet">
      <SyntaxHighlighter language={language} style={prism} wrapLongLines={true}>
        {code}
      </SyntaxHighlighter>
    </div>
    <div className="answer-options">
      {shuffledAnswers.map((answer, index) => (
        <button
          key={index}
          className={`answer-button ${
            selectedAnswerIndex === index
              ? isCorrect
                ? "correct"
                : "incorrect"
              : ""
          }`}
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