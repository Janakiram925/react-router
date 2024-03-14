import React, { useState } from 'react';
import Child from './Child';

function Parent() {
    var data = [{ name: "John" }, { name: "Bob" }, { name: "Max" }];
    const [childData, setChildData] = useState('');
    const handleChildData = (message) => {
        setChildData(message)
        console.log(`child button clicked`, message);

    }
    return (
        <>
            <div>Parent</div>
            <Child data = {data} sendData = {handleChildData}/>
            <p>{childData}</p>
        </>
    )
}

export default Parent