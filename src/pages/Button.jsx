import React from "react";
import { useState } from "react";

export const Button = () => {
    const [ count, setCount] = useState(0);
    const [ count2, setCount2] = useState(0);

    function countClicks () {
        setCount(count + 1);
    }

    function countClicks2 () {
        setCount2(count2 + 1);
    }

    function resetCount() {
        setCount(0);
        setCount2(0);
    }


    return (
<div>
    
   <button onClick={countClicks}>Clicked: {count} times</button>  
   <button onClick={countClicks2}>Clicked: {count2} times</button> 
   <button onClick={resetCount}>Clear counts</button>  
   <h1>jlkjlkjl</h1>
</div>
    );
}