import React from "react";
import useLogic from "./hooks/useLogic";

function App() {
  const STARTING_TIME = 20;

  const {
    text,
    handleChange,
    isTimeRunning,
    textBoxRef,
    timeRemaining,
    startGame,
    wordCount,
  } = useLogic(STARTING_TIME);

  return (
    <div>
      <h1>How do you type fast?</h1>
      <textarea
        value={text}
        onChange={handleChange}
        disabled={!isTimeRunning}
        ref={textBoxRef}
      />
      <h4>Time Remaining: {timeRemaining}</h4>
      <button onClick={startGame} disabled={isTimeRunning}>
        Start
      </button>
      <h1>Word Count: {wordCount}</h1>
    </div>
  );
}

export default App;
