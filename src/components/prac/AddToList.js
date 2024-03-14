import React, { useEffect } from 'react';
import { useState, useRef } from 'react';

function AddToList() {
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef()

    var arr = [{ name: "John" }, { name: "Bob" }, { name: "Max" }];
    const [arr1, setArr] = useState(arr);
    const handleInput = (e) => {
        setInputValue(e.target.value);
    }
    useEffect(() => {
        console.log(arr1);
    }, [arr1])
   
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputValue);
        setArr([...arr1, {
            ['name']: inputValue
        }]);
        setInputValue('');

    }

    const handleEdit = (e, item, index) => {
        console.log(`handle edit clicked ${item}`);
        inputRef.current.value = item;
        if(index > -1) {
            arr1.splice(index, 1);
        }


    }
    const handleDelete = (e, item, index) => {
        console.log(`handle delete clicked ${item}`);
        let newArr = arr1.filter((element) => {
            return element.name !== item
        });
        setArr(newArr)
        
    }
    return (
        <>
            <div>Test Component</div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input ref={inputRef} type='text' onChange={(e) => handleInput(e)} value={inputValue} name='name'/>
                <button>Submit</button>
            </form>
            {
                arr1.map((item, index) => {
                    return (
                        <>
                        <h2>{item.name}</h2>
                        <button onClick={(e) => handleEdit(e, item.name, index)}>edit</button>
                        <button onClick={(e) => handleDelete(e, item.name, index)}>delete</button>
                        </>
                        
                    )
                })
            }
        </>
    )
}

export default AddToList