import React from "react";
import './styles/statistics.css'

export const Statistics = React.memo(({ state, total, positiveFeedback }) => {
    return (
    <div className='statistics-div'>
      <h2 className='statistics-title'>Statistics</h2>
      <p>Good: {state.good}</p>
      <p>Neutral: {state.neutral}</p>
      <p>Bad: {state.bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positiveFeedback.toFixed(2)}%</p>
    </div>
  );
});

