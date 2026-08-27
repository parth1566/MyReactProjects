import React from 'react'
import { useState } from 'react'
import { useMemo } from 'react';

const MemoDemo = () => {

    const [number, setNumber] = useState(0);
    const [text, setText] = useState("");

    function slowDouble(n) {
        console.log("computing...");
        for (let i = 0; i < 1000000000; i++) { }
        return n * 2;
    }

    const doubled = useMemo(() => slowDouble(number), [number]);

    return (
        <div>
            <p>Number: {number}, Doubled: {doubled}</p>
            <button onClick={() => setNumber(number + 1)}>Increment</button>
            <input type="text"
                value={text}
                onChange={(e) => setText(e.target.value)} />
            <p>{text}</p>
        </div>  
    )
}

export default MemoDemo
