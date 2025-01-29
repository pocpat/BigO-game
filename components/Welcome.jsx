import PropTypes from 'prop-types';

const Welcome = ({ onSelectMode }) => {
  return (
    <div className="welcome">
      <h1>Welcome to the Big O Notation Quiz</h1>
      <p>Select the mode you want to play:</p>
      <button onClick={() => onSelectMode('normal')}>Normal Mode</button>
      <button onClick={() => onSelectMode('findCorrect')}>Find Correct Mode</button>
    </div>
  );
};
Welcome.propTypes = {
  onSelectMode: PropTypes.func.isRequired,
};

export default Welcome;
