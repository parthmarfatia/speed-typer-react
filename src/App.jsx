import React, { useState, useEffect, useRef } from "react";

function App() {
  const STARTING_TIME = 5;

  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const textBoxRef = useRef(null);

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  function calculateWordCount(text) {
    const wordsArr = text.trim().split(" ");
    return wordsArr.filter((word) => word !== "").length;
  }

  useEffect(() => {
    if (timeRemaining > 0 && isTimeRunning) {
      setTimeout(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
    } else {
      endGame();
    }
  }, [timeRemaining, isTimeRunning]);

  function startGame() {
    setIsTimeRunning(true);
    setTimeRemaining(STARTING_TIME);
    setText("");
    textBoxRef.current.disabled = false;
    textBoxRef.current.focus();
  }

  function endGame() {
    setIsTimeRunning(false);
    setWordCount(calculateWordCount(text));
  }

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
