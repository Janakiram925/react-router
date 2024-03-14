import React, { useState, useRef, useEffect } from 'react';

function StopWatch() {
    const [time, setTimer] = useState(0);
    const [isRunning, setRunning] = useState(false);
    useEffect(() => {
        let intervalId;
        if(isRunning) {
           intervalId =  setInterval(() => {
            setTimer(prev => prev + 1)                
            }, 1000)
        }

        return () => {
            clearInterval(intervalId);
        }

    }, [time, isRunning]);
    const startTimer = () => {
        setRunning(!isRunning)
    }
    const resetTimer = () => {
        setTimer(0)
    }
    return (
        <>
            <div>StopWatch</div>
            <h2>{time}</h2>
            <button onClick={(e) => startTimer(e)}>{isRunning ? 'stop' : 'start'}</button>
            <button onClick={() => resetTimer()}>reset timer</button>
        </>
    )
}

export default StopWatch