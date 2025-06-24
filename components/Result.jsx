import PropTypes from 'prop-types';
import './results.css'

const Result = ({ userAnswers, resetQuiz, totalQuestions }) => {
  const calculateScore = userAnswers.filter(answer => answer).length; 
  
  return (
    <div className="results">
      <h2>Quiz Finished!</h2>
      <p>You scored {calculateScore} out of {totalQuestions}.</p>
      <ul>
        {userAnswers.map((isCorrect, index) => (
          <li key={index} className={isCorrect ? 'correct' : 'incorrect'}>
            Question {index + 1}: {isCorrect ? "Correct" : "Incorrect"}
          </li>
        ))}
      </ul>
      <button onClick={resetQuiz}>Restart Quiz</button>
    </div>
  )
}

Result.propTypes = {
  userAnswers: PropTypes.arrayOf(PropTypes.bool).isRequired,
  resetQuiz: PropTypes.func.isRequired,
  totalQuestions: PropTypes.number.isRequired,
};

export default Result