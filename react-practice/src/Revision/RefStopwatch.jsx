import React from 'react'
import { useState, useRef, useEffect } from 'react'

const RefStopwatch = () => {

    const [seconds, setSeconds] = useState(0);
    let intervalRef = useRef(null);

    function handleStart() {
        intervalRef.current = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);
    }

    function handleStop() {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    }


  return (
    <div>
        <h1>Stopwatch: {seconds} seconds</h1>
      <button onClick={handleStart}>Start</button>
      <br /><br />
      <button onClick={handleStop}>Stop</button>
    </div>
  )
}

export default RefStopwatch
