import React from "react";

function InputList({ handleChange, addList, task, editTask, isEditing, saveEditTask }) {
    return (
        <div className="input-list">
            <input 
                type="text" 
                placeholder={isEditing ? "Edit your Task" : "Enter your Task"} 
                value={isEditing ? editTask : task} 
                onChange={handleChange} 
            />
            <button 
                onClick={isEditing ? saveEditTask : addList} 
                className="add-btn">
                {isEditing ? "Save" : "Add"}
            </button>
        </div>
    );
}

export default InputList;
