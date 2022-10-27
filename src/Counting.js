import React, { useState } from "react";

const Counter = () => {
    
    const [count, setCount] = useState(0)

    const increase = () => setCount(count + 1)
    const decrease = () => setCount(count - 1)
    const reset = () => setCount(0)

    return ( 
        <div className="countercontainer">
            <h1>Button counter</h1>
            <button onClick={increase}>increase</button>
            <button onClick={reset}>reset</button>
            <button onClick={decrease}>decrease</button>
            <p>the button click amount is {count}</p>
        </div>
     );
     
}
 

export default Counter;