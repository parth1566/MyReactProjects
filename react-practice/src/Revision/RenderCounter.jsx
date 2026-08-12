import React from 'react'
import { useRef, useState } from 'react'

const RenderCounter = () => {

    const [count, setCount] = useState(0);
    let counterRef = useRef(0);

    counterRef.current = counterRef.current + 1;
    console.log("Render #" + counterRef.current);
    

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default RenderCounter
