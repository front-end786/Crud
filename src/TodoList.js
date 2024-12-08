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
            task,
            completed:false
        }
        setTodoList([...todoList, newTask]);
    }
    function deleteTask(id){
        setTodoList(todoList.filter(task => task.id !== id));
    }
   
    
    function completedTask(id){
       setTodoList(
        todoList.map((task)=>{
            if(task.id === id){
                return {...task, completed: !task.completed}
            } else{
                return task
            }
    })
       )
       console.log(todoList.completed);
       
    }

                
    return(
        <div>
            <InputList handleChange={handleChange} addList={addList} task={task} />
            <TaskList todoList={todoList} deleteTask={deleteTask} completedTask={completedTask} />
        </div>

    )
}

export default TodoList;