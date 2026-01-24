import './App.css';
import { useUser } from './UserContext';

function App() {
  const {goodStat, neutralStat, badStat, changeGood, changeNeutral, changeBad } = useUser()
  let {positiveFeedback, total} = useUser()

  
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
