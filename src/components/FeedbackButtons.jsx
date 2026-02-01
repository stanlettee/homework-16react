import React from "react";
import './styles/feedback.css'

export const FeedbackButtons = React.memo(({ onGood, onNeutral, onBad }) => {
  return (
    <div className='feedback-div'>
      <h2 className='feedback-title'>Please give us feedback</h2>
      <button onClick={onGood} className='feedback-button'>Good</button>
      <button onClick={onNeutral} className='feedback-button'>Neutral</button>
      <button onClick={onBad} className='feedback-button'>Bad</button>
    </div>
  );
});
