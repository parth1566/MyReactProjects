import React from 'react'
import { useRef, useState, useEffect } from 'react'

const RenderCounter = () => {

    const [count, setCount] = useState(0);
    let counterRef = useRef(0);
    let prevCounterRef = useRef(0);

    counterRef.current = counterRef.current + 1;
    console.log("Render #" + counterRef.current);

    useEffect(() => {
     prevCounterRef.current = count;
    }, [count])
    
    

  return (
    <div>
      <p>Now: {count}</p>
      <p>before: {prevCounterRef.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
     
    </div>
  )
}

export default RenderCounter
