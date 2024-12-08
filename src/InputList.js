import React from "react";

function InputList({handleChange,addList}){
    return(
        <div className="input-list">
            <input type="text" placeholder="Enter your Task" onChange={handleChange} />
            <button onClick={addList} className="add-btn" >Add</button>
        </div>
    )
}
export default InputList;