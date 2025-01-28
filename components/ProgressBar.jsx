import './progressBar.css';
import PropTypes from 'prop-types';

const ProgressBar = ({ progress }) => {
  return (
    <div className='progress'>
      <div className="progress-value" style={{ width: `${progress}%` }}></div>
    </div>
  )
}

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
};
export default ProgressBar;