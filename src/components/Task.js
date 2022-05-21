import React from "react";

function Task({text, category, id, deleteCallBack}) {

  
  return (
    <div key={id} className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button 
      className="delete"
      onClick={deleteCallBack}
      >X</button>
    </div>
  );
}

export default Task;
