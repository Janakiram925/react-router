import React, { useState, useRef } from 'react';

function TaskForm() {
    const taskRef = useRef();
    const taskDescriptionRef = useRef();
    const [inputValue, setInputValue] = useState('');
    const [textArea, settextArea] = useState('');
    const [task, setTask] = useState([]);
    const [taskDescription, setTaskDescription] = useState([]);
    const [created, setCreated] = useState(false);
    const [showTasks, setShowTasks] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        setCreated(true);
        setTask([...task, inputValue]) ;
        setTaskDescription([...taskDescription, textArea]);
        prompt(`${inputValue} created successfully`)
        setInputValue('');
        settextArea('');


    }
    const handleTaskName = (e) => {
        setInputValue(e.target.value)
    };
    const handleTaskDescription = (e) => {
        settextArea(e.target.value)

    }
    const showPendingTasks = () => {
        setShowTasks(!showTasks)
    }
    const handleEdit = (e, item, index) => {
        taskRef.current.value = item
        if(index > -1) {
            task.splice(index, 1);
        }

    }
    const handleDelete = (e, item, index) => {
        let newArr = task.filter((item) => {
            return item !== item
        })
        setTask(newArr)
    }
    return (
        <>
            <h1>Task Form</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='taskName'>Task Name: </label>
                        <input ref={taskRef} type='text' name='taskName' onChange={(e) => handleTaskName(e)} value={inputValue} />
                    </div>
                    <br />
                    <div>
                        <label htmlFor='descriptio'>Description</label>
                        <textarea ref={taskDescriptionRef} name='taskDescription' onChange={(e) => handleTaskDescription(e)} value={textArea} />
                    </div>
                    <br />
                    <button type='submit'>Create task</button>
                </form>
                {/* <div>
                    {
                        created ? <p>`${task} - ${taskDescription} created successfully`</p> : ''
                    }
                </div> */}
                <br />
                <button onClick={showPendingTasks}>{showTasks ? 'hide tasks' : 'showtasks'}</button>
                <div>
                    {
                        task.map((item, index) => {
                            return (
                                <>
                                    <h2>{item}</h2>
                                    <button onClick={(e) => handleEdit(e, item, index)}>edit</button>
                                    <button onClick={(e) => handleDelete(e, item, index)}>delete</button>
                                </>
                            )
                        })
                    }
                </div>
            </div>

        </>
    )
}
export default TaskForm