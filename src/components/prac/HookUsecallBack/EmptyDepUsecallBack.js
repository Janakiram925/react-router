import React from 'react'
import { useEffect, useState, useCallback } from 'react';

function EmptyDepUsecallBack() {
    const [state, setState] = useState(false);
    // console.log('daaa', data);

    const handleClick = () => {
        setState(true);
        console.log(state);

    }
    const handleSubmit = useCallback(() => {
        console.log('in usecallback',state)

    }, []);


    return (
        <>
            <button onClick={handleClick}>click</button>
            <button onClick={handleSubmit}>submit</button>
            <ul>
            {/* {
                data.map((item) => {
                    return <li>{item.name}</li>
                })
            } */}

            </ul>
            
            
            
        </>
    )
}

export default EmptyDepUsecallBack