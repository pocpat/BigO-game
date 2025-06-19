import PropTypes from 'prop-types';
import './welcome.css';
import '../src/App.css';
import '../src/toggle.css';
import logo from '/ekLogo.png';
import ToggleButton from './ToggleButton';
import FooterCredits from './Footer';

const Welcome = ({ onSelectMode, isDarkMode, toggleTheme }) => {
  return (
      <div className="w-wrapper">
         <div className="welcome-top-bar">
                <div className="logo">
                <img src={logo} alt="App Logo" />
                </div>
          <ToggleButton isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          </div>
    <div className="welcome">
      <div className="w-header">
        <h1>Big O</h1>
        <h1>Brain Bender</h1>
      </div>
      <p className="w-select">Select the mode you want to play:</p>
      <div className="w-buttons">
        <div className="w-button-item">
          <button onClick={() => onSelectMode('normal')}>Perfect Run </button>
          <p className="w-info-text">
          Answer questions, see your result in the end
          </p>
        </div>
        <div className="w-button-item">
          <button onClick={() => onSelectMode('findCorrect')}>
          Training Ground 
          </button>
          <p className="w-info-text">
            Only the correct answer unlocks the next question
          </p>
        </div>
      </div>
      <FooterCredits />
    </div>
    </div>
  );
};

Welcome.propTypes = {
  onSelectMode: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default Welcome;