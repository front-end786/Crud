import React from "react";

function TaskList({todoList, deleteTask}) {
    return(
        <div>
            <h3>Task List</h3>
        {todoList.map((task,index)=>(
            <div key={index} className="list">
                <p className="task">{task.task}</p>
                <button onClick={() => deleteTask(task.id)} className="del-button">Delete &times;</button>
                </div>
        ))}</div>
    )
}

export default TaskList;