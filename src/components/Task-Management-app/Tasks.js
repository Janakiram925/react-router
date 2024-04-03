import React, { useState, useEffect } from 'react';

function Tasks({ task, taskDescription }) {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        setTasks([...task])
    }, [task]);

    const handleDelete = (e, task, index) => {
        console.log(task)

    }

    const handleEdit = (e, task, index) => {
        console.log(task);

    }

    return (
        <>
            <h1>Tasks</h1>
            <div>
                {
                    tasks.map((task, index) => {
                        return (
                            <>
                                <p>{task}</p>
                                <button onClick={(e) => handleEdit(e, task, index)}>edit</button>
                                <button onClick={(e) => handleDelete(e, task, index)}>delete</button>

                            </>
                        )
                    })
                }
            </div>
        </>
    )
}
export default Tasks