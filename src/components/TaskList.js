import React from "react";
import Task from './Task.js'

function TaskList({tasks, deleteCallBack}) {

    
  const taskCards = tasks.map(e=><Task text={e.text} category={e.category} key={e.text} deleteCallBack={deleteCallBack}/>)
  return (
    <div className="tasks">
      {taskCards}
    </div>
  );
}

export default TaskList;
