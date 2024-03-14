import React, { useState, useEffect } from 'react'

function Child({handleSubmit, value}) {
    // const items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    useEffect(() => {
        console.log(`Child component rendered`, value);
    }, []);

    return (
        <>
        <button onClick={() => handleSubmit(`message from child`)}>child submit</button>
        </>
    )
}

export default Child