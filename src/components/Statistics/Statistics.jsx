import Notification from "components/Notification/Notification";

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  
  return (
    <>
      {total === 0
        ? <Notification message="There is no feedback" />
        : <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive Feedback: {
          Number.isNaN(positivePercentage)
            ? 0
            : positivePercentage} %
        </li>
      </ul>
      }
      
    </>
    
  )
};

export default Statistics;