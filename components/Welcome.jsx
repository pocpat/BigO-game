// import PropTypes from 'prop-types';
// import './welcome.css';
// import '../src/App.css';
// import '../src/toggle.css';
// import logo from '../public/ekLogo.png';
// import ToggleButton from './ToggleButton';

// const Welcome = ({ onSelectMode, isDarkMode, toggleTheme }) => {
  
//   return (
//     <div className="w-wrapper">
//       <div className="welcome-top-bar">
//         <div className="logo">
//           <img src={logo} alt="App Logo" />
//         </div>
//         <ToggleButton isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
//       </div>
//       <div className="welcome">
//         <div className="w-header">
//           <h1>Big O</h1>
//           <h1>Brain Bender</h1>
//         </div>
//         <p className="w-select">Select the mode you want to play:</p>
//         <div className="w-buttons">
//           <div className="w-button-item">
//             <button onClick={() => onSelectMode('normal')}>Training Ground</button>
//             <p className="w-info-text">Only the correct answer unlocks the next question</p>
//           </div>
//           <div className="w-button-item">
//             <button onClick={() => onSelectMode('findCorrect')}>Perfect Run</button>
//             <p className="w-info-text">Answer questions, see your result in the end</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// Welcome.propTypes = {
//   onSelectMode: PropTypes.func.isRequired,
//   isDarkMode: PropTypes.bool.isRequired,
//   toggleTheme: PropTypes.func.isRequired,
// };

// export default Welcome;



import PropTypes from 'prop-types';
import './welcome.css';
import '../src/App.css';
import '../src/toggle.css';
import logo from '/ekLogo.png';
import ToggleButton from './ToggleButton';
import { useState } from 'react';


const Welcome = ({ onSelectMode }) => {
  const [isDarkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(!isDarkMode);
        document.body.classList.toggle('dark-mode');
    };
  return (
      <div className="w-wrapper">
         <div className="welcome-top-bar">
                <div className="logo">
                <img src={logo} alt="App Logo" />
                </div>
          <ToggleButton isDarkMode={isDarkMode} toggleTheme={toggleDarkMode} />
          </div>
    <div className="welcome">
      <div className="w-header">
        <h1>Big O</h1>
        <h1>Brain Bender</h1>
      </div>
      <p className="w-select">Select the mode you want to play:</p>
      <div className="w-buttons">
        <div className="w-button-item">
          <button onClick={() => onSelectMode('normal')}>Training Ground</button>
          <p className="w-info-text">
            Only the correct answer unlocks the next question
          </p>
        </div>
        <div className="w-button-item">
          <button onClick={() => onSelectMode('findCorrect')}>
            Perfect Run
          </button>
          <p className="w-info-text">
            Answer questions, see your result in the end
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

Welcome.propTypes = {
  onSelectMode: PropTypes.func.isRequired,
};

export default Welcome;