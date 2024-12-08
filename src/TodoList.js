import React, { useState } from 'react';
import InputList from './InputList';
import TaskList from './TaskList';

function TodoList(){
    const [task, setTask]= useState('');
    const [todoList, setTodoList]=useState([]);
    function handleChange(e){
        setTask(e.target.value);
        setTask('')
    }
    function addList(){
        const newTask={
            id : todoList.length===0?1:todoList[todoList.length-1].id+1,
            task,
        }
        setTodoList([...todoList, newTask]);
    }
    // Edit Task
    function editTask(id, newTask){
        setTodoList(todoList.map(task => task.id === id ? { ...task, task: newTask } : task));
    }

                
    return(
        <div>
            <InputList handleChange={handleChange} addList={addList} task={task} />
            <TaskList todoList={todoList} editTask={editTask} />
        </div>

    )
}

export default TodoList;