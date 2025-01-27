    /* eslint-disable react/prop-types*/
    
    import quizData from '../src/quizeData'
    
    const Result = ({userAnswers, code, resetQuiz =()=>{}}) => {
        const calculateScore = userAnswers.filter(answer => answer).length; 
      return (
        
        <div className="results">
    <h2>Quiz Finished!</h2>
    <p>You scored {calculateScore} out of {quizData.length}.</p>
    <ul>
      {userAnswers.map((isCorrect, index) => (
        <li key={index}>
          Question {index + 1}: {isCorrect ? "Correct" : "Incorrect"}
        </li>
      ))}
    </ul>
    <button onClick={resetQuiz}>Restart Quiz</button>
  </div>
        
        
      )
    }
    
    export default Result