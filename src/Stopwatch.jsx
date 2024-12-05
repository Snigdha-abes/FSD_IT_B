import React, { useState, useEffect } from 'react';
import './App.css'

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  
  useEffect(() => {
    let interval;
    
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

   
  }, [isRunning]);

  const startStop = () => setIsRunning(!isRunning);
  const reset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div id='counter'>
      <h1>{seconds}s</h1>
      <button onClick={startStop}>{isRunning ? 'Stop' : 'Start'}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Stopwatch;
