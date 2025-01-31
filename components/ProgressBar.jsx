import './progressBar.css';
import PropTypes from 'prop-types';

const ProgressBar = ({ progress }) => {
  const formattedProgress = progress.toFixed(0);
  return (
    <div className="progress-container">
      <div className="progress">
        <div className="progress-value" style={{ width: `${progress}%` }}></div>
        <div className="progress-text">{formattedProgress}%</div>
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default ProgressBar;