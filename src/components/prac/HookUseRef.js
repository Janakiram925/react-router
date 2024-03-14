import React from 'react';
import { useState, useEffect, useRef } from 'react';


function HookUseRef() {
    const countRef = useRef(0);

    const handleClick = () => {
        countRef.current = countRef.current + 1;
        console.log(countRef.current);
    }

    //If you show {countRef.current} in the JSX, the number won’t update on click. 
    //This is because setting ref.current does not trigger a re-render. 
    //Information that’s used for rendering should be state instead.



    console.log('component re-rendered')

    return (
        <>
            <p>Current Value: {countRef.current}</p>
            <button onClick={handleClick}>Click!</button>
        </>
    )
}

export default HookUseRef