import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import Child from './Child';

function DemoUseCallback() {
    const [count, setCount] = useState(0); 
    // const [dep, setdep] = useState(false);
    const [dep] = useState(false);
    console.log(`parent rendered`);

    const handleuseCallback = () => {
        setCount((prevCount) => prevCount + 1)
    }

    const handleSubmit = (message) => {
        console.log(`in parent ${message}`);

    }
    return (
        <>
            <button onClick={handleuseCallback}>usecallback</button>
            <p>{count}</p>
            <Child handleSubmit = {handleSubmit} value='hello' />
        </>
    )
}

export default DemoUseCallback