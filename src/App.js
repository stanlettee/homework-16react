import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [goodStat, changeGood] = useState(0)
  const [neutralStat, changeNeutral] = useState(0)
  const [badStat, changeBad] = useState(0)
  useEffect(() => {
   console.log('Your state has been reloaded')
 }, [goodStat, neutralStat, badStat]);
  let total = goodStat + neutralStat + badStat
  let positiveFeedback = 100 / (goodStat + neutralStat + badStat) * goodStat

  
  return (
    <div className="App">
      <div className='feedback-div'>
        <h2 className='feedback-title'>Please give as feedback</h2>
        <button onClick={() => {changeGood(goodStat + 1)}} className='feedback-button' type='button'>Good</button>
        <button onClick={() => {changeNeutral(neutralStat + 1)}} className='feedback-button' type='button'>Neutral</button>
        <button onClick={() => {changeBad(badStat + 1)}} className='feedback-button' type='button'>Bad</button>
      </div>
      <div className='statistics-div'>
        <h2 className='statistics-title'>Statistics</h2>
        <p className='statistics-text'>Good: {goodStat}</p>
        <p className='statistics-text'>Neutral: {neutralStat}</p>
        <p className='statistics-text'>Bad: {badStat}</p>
        <p className='statistics-text'>Total: {goodStat + neutralStat + badStat}</p>
        <p className='statistics-text'>Positive feedback: {total === 0 ? 0 : positiveFeedback}%</p>
      </div>
    </div>
  );
}

export default App;
