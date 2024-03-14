import React from 'react';
import { useState } from 'react';

function FormInput() {
    const [data, setData] = useState({ userName: '', password: '' });
    const { userName, password} = data;
    const [submit, submitted] = useState(false);
    const handleInput = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        submitted(true);
    }
    return (
        <>
            <div>FormInput</div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>
                    UserName : <input type='text' name='userName' value={userName} onChange={(e) => handleInput(e)} />
                </label> <br />
                <label>
                    Password: <input type='password' name='password' value={password} onChange={(e) => handleInput(e)}/>
                </label> <br />
                <input type='submit' value='submit' />
            </form>
            <p>{submit ? userName : ''}</p>
            <p>{submit ? password : ''}</p>
        </>
    )
}

export default FormInput