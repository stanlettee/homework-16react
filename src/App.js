import "./App.css";
import { useCallback, useState } from "react";
import { useRenderInfo } from "@uidotdev/usehooks";
import { useUser } from "./UserContext";
import { FeedbackButtons } from "./components/FeedbackButtons";
import { Statistics } from "./components/Statistics";

function App() {
  const { state, dispatch, total, positiveFeedback } = useUser();
  const renderInfo = useRenderInfo("App");
  const info = useRenderInfo("App") || {};

  const [count, setCount] = useState(0);

  const onGood = useCallback(() => {
    dispatch({ type: "GOOD" });
  }, [dispatch]);

  const onNeutral = useCallback(() => {
    dispatch({ type: "NEUTRAL" });
  }, [dispatch]);

  const onBad = useCallback(() => {
    dispatch({ type: "BAD" });
  }, [dispatch]);

  return (
    <div className="App">
      <FeedbackButtons
        onGood={onGood}
        onNeutral={onNeutral}
        onBad={onBad}
      />

      <Statistics
        state={state}
        total={total}
        positiveFeedback={positiveFeedback}
      />

      <button onClick={() => setCount(count + 1)}>
        Re-render App
      </button>

    <div className="render-info">
      <h2>Render Info</h2>
        {Object.keys(info).map((key) => {
            return ( <ul className='app-list' key={key}>
              <li>{key}</li>
              <li>{info[key]}</li>
            </ul>
            );
          })}
    </div>
    </div>
  );
}

export default App;