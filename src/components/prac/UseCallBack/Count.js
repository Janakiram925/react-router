import React from 'react'

function Count({text, count}) {
    console.log(`${text} rendered`);
    return (
        <>
            <div>{`${text} -- ${count}`}</div>
        </>
    )
}

export default React.memo(Count);