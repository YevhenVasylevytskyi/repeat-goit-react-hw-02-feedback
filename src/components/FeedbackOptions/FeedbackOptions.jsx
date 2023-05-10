import Button from '@mui/material/Button';
import PropTypes from "prop-types";

import s from "./FeedbackOptions.module.css"

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={s.FeedbackOptions}>
      {options.map(el => {

        return (
          <Button
            className={s.Button}
            variant="contained"
            type="button"            
            key={el}
            onClick={() => onLeaveFeedback(el)}
          >
            {capitalizeFirstLetter(el)}
          </Button>
        );
      })}
    </div>
  );
}

FeedbackOptions.protoType = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;