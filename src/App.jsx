import React, { useState, useEffect } from "react";

function App() {
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(5);

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  function calculateWordCount(text) {
    const wordsArr = text.trim().split(" ");
    return wordsArr.filter((word) => word !== "").length;
  }

  useEffect(() => {
    if (timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
    }
  }, [timeRemaining]);

  return (
    <div>
      <h1>How do you type fast?</h1>
      <textarea value={text} onChange={handleChange} />
      <h4>Time Remaining: {timeRemaining}</h4>
      <button onClick={() => calculateWordCount(text)}>Start</button>
      <h1>Word Count: 5</h1>
    </div>
  );
}

export default App;
