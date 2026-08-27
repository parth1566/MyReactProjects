import { useState } from "react"
import React from 'react'
import { useCallback } from "react";

const Child = React.memo(({ onAction }) => {
    console.log("Child rendered!");
    return <button onClick={onAction}>Child's action</button>;
});


const CallbackDemo = () => {

    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    const handleAction = useCallback(() => {
    console.log("action!");
    }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <br /><br />
      <input type="text" 
        value={text}
        placeholder="Type Something..."
        onChange={(e) => setText(e.target.value)}
        />
        <br /><br />
      <Child onAction={handleAction}/>
    </div>
  )
}

export default CallbackDemo