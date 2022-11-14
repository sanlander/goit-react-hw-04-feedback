import PropTypes from 'prop-types';
import { firstLetterToUppercase } from 'components/utils/firstLetterToUppercase';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <div>
      {options.map(option => (
        <Button
          type="button"
          onClick={() => onLeaveFeedback(option)}
          key={option}
        >
          {firstLetterToUppercase(option)}
        </Button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};
