import React from 'react';
import ChildToChild from './ChildToChild';

function Child({data, sendData}) {
    // const data = props.data;
    return (
        <>
            <div>Child</div>
            {
                data.map((item) => {
                    return <p>{item.name}</p>
                })
            }
            <button onClick={() => sendData(`message from child`)}>sending data to parent</button>
            <ChildToChild />
        </>
    )
}

export default Child