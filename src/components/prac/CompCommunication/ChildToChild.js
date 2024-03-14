import React from 'react';
import { useContext } from 'react';
import { DataContext } from './Context';

function ChildToChild() {
    const data = useContext(DataContext);
    return (
        <>
            <div>ChildToChild</div>
            <h2>{`displaying data from context ${data}`}</h2>
        </>
    )
}

export default ChildToChild