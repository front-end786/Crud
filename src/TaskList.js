import React from "react";

function TaskList({todoList, deleteTask, editTask }) {
    return(
        todoList.length>=1?
        <div>
            <h3>Task List</h3>
        {todoList.map((task,index)=>(
            <div key={index}>
                <p className="task">{task.task}</p>
              <div> 
                 <button onClick={() => deleteTask(task.id)} className="del-button">Delete &times;</button>
                 <button onClick={()=>editTask(index)} >Done</button>
                 </div>
                </div>
        ))}</div>:null
)
}

export default TaskList;