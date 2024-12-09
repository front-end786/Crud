import React, { useState } from 'react';
import InputList from './InputList';
import TaskList from './TaskList';

function TodoList(){
    const [task, setTask] = useState(''); // For new task input
    const [todoList, setTodoList] = useState([]);
    const [editTask, setEditTask] = useState(''); // For the task being edited
    const [taskId, setTaskId] = useState(null);  // Track which task is being edited

    function handleChange(e){
        // Update the current task text based on user input
        if (taskId !== null) {
            // If we are editing, update the editTask
            setEditTask(e.target.value);
        } else {
            // Otherwise, update the new task input
            setTask(e.target.value);
        }
    }

    function addList(){
        const newTask = {
            id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
            task,
            completed: false
        }
        setTodoList([...todoList, newTask]);
        setTask(''); // Clear input after adding
    }

    function deleteTask(id){
        setTodoList(todoList.filter(task => task.id !== id));
    }

    function editTaskList(id){
        const taskToEdit = todoList.find(task => task.id === id);
        if (taskToEdit) {
            setTaskId(id); // Set the task ID being edited
            setEditTask(taskToEdit.task); // Set the task text to be edited
        }
    }

    function saveEditTask(){
        setTodoList(todoList.map(task => 
            task.id === taskId ? { ...task, task: editTask } : task
        ));
        setTaskId(null); // Reset the taskId after editing
        setEditTask(''); // Clear the edit task input
    }

    return(
        <div>
            <InputList 
                handleChange={handleChange} 
                task={task} 
                editTask={editTask} 
                isEditing={taskId !== null} // If taskId is not null, we're editing
                saveEditTask={saveEditTask}
                addList={addList}
            />
            <TaskList 
                todoList={todoList} 
                deleteTask={deleteTask} 
                editTaskList={editTaskList} 
            />
        </div>
    )
}

export default TodoList;
