// import PropTypes from 'prop-types';
import { Component } from "react";
// import s from './Feedback.module.css';

class Feedback extends Component {
  constructor() {
    super();

    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
      total: 0,
      positiveFeedback: 0,
    };
  }

  countTotalFeedback() {
    this.setState(() => ({      
      total: this.state.total + 1,
    }));
  }

  countPositiveFeedbackPercentage() {
    this.setState(() => ({      
      // positiveFeedback: this.state.good / this.state.total,
    }));
  }

  handleGoodClick = (evt) => {
    // console.log(evt.currentTarget.name)
    const nameBtn = evt.currentTarget.name
    this.setState(() => ({      
      [nameBtn]: this.state[nameBtn] + 1,      
    }));
    this.countTotalFeedback()
    // this.countPositiveFeedbackPercentage()
  };

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
            
        <button type="buttom" name="good" onClick={this.handleGoodClick}>Good</button>
        <button type="buttom" name="neutral" onClick={this.handleGoodClick}>Neutral</button>
        <button type="buttom" name="bad" onClick={this.handleGoodClick}>Bad</button>

        <h2>Statistics</h2>

        <ul>
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
          <li>Total: {this.state.total}</li>
          <li>Positive Feedback: {this.state.positiveFeedback}</li>
        </ul>
      </div>
    );
  }
}
// Feedback.propTypes = {
//   text: PropTypes.string.isRequired,  
// };

export default Feedback;