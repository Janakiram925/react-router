import React from 'react'

function Button({incrementCount, text}) {
    console.log(`button ${text} rendered`);
    return (
        <>
            <button onClick={incrementCount}>{`increment ${text}`}</button>
        </>
    )
}

export default React.memo(Button);