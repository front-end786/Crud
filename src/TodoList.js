import React, { useState } from 'react';
import InputList from './InputList';
import TaskList from './TaskList';

function TodoList(){
    const [task, setTask]= useState('');
    const [todoList, setTodoList]=useState([]);
    const [editTask, setEditTask]=useState('')
    function handleChange(e){
        // Trim the input to remove leading/trailing spaces and SetTask Value
        setTask(e.target.value.trim());
        // Clear Value
    }
    function addList(){
        const newTask={
            id : todoList.length===0?1:todoList[todoList.length-1].id+1,
            task,
            completed:false
        }
        setTodoList([...todoList, newTask]);
    }
    function deleteTask(id){
        setTodoList(todoList.filter(task => task.id !== id));
    }
   
    // Edit Task via input field
    function editTaskList(id){
        const taskToEdit = todoList.find(task => task.id === id);

    }
    
                
    return(
        <div>
            <InputList handleChange={handleChange} addList={addList} task={task} />
            <TaskList todoList={todoList} deleteTask={deleteTask} editTaskList={editTaskList} />
        </div>

    )
}

export default TodoList;