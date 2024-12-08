import React, { useState } from 'react';
import InputList from './InputList';
import TaskList from './TaskList';

function TodoList(){
    const [task, setTask]= useState('');
    const [todoList, setTodoList]=useState([]);
    function handleChange(e){
        setTask(e.target.value)
    }
    function addList(){
        const newTask={
            id : todoList.length===0?1:todoList[todoList.length-1].id+1,
            task
        }
        setTodoList([...todoList, newTask]);
    }
    function deleteTask(id){
        setTodoList(todoList.filter(task => task.id !== id));
    }
                
    return(
        <div>
            <InputList handleChange={handleChange} addList={addList} task={task} />
            <TaskList todoList={todoList} deleteTask={deleteTask} />
        </div>

    )
}

export default TodoList;