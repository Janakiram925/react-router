import React, { useCallback, useState } from 'react';
import Count from './Count';
import Button from './Button';

function ParentComponent() {
    const [age, setAge] = useState(20);
    const [salary, setSalary] = useState(5000);

    // const incrementAge = () => {
    //     setAge(prevage => prevage + 1)
    // }
    // const incrementSalary = () => {
    //     setSalary(prevSal => prevSal + 1000);
    // }
    const incrementAge = useCallback(() => {
        setAge(prevAge => prevAge + 1);
    }, [age]);

    const incrementSalary = useCallback(() => {
        setSalary(prevSal => prevSal + 1000);
    }, [salary]);
    return (
        <>
            
            <Count text='age' count= {age}/>
            <Button incrementCount = {incrementAge} text='age'/>
            <Count text= 'salary' count={salary} />
            <Button incrementCount={incrementSalary} text='salary' />

        </>
    )
}

export default ParentComponent