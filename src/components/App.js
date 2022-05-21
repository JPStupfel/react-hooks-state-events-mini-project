import React, {useState}from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
//console.log("Here's the data you're working with");
//console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks]=useState([...TASKS])

  function deleteCallBack(event){
    const updatedTasks = tasks.filter(element => event.target.parentElement.children[1].textContent !== element.text);
    setTasks([...updatedTasks])
  }

  function filterCallBack(event){
    //console.log(event.target.textContent)

    const updatedTasks = event.target.textContent==='All' ? [...TASKS] : TASKS.filter(element => event.target.textContent === element.category);
    setTasks([...updatedTasks])
  }


  function onTaskFormSubmit(newOBJ){
    
   

    setTasks(tasks =>
      [...tasks, newOBJ]
      )
  }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter filterCallBack={filterCallBack}categories={CATEGORIES}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={tasks} deleteCallBack={deleteCallBack}/>
    </div>
  );
}

export default App;

/*

Pass the tasks array to TaskList

*/


  // function onTaskFormSubmit(event){
  //   event.preventDefault()
  //   debugger
  //   setFormInput((obj)=>{ obj.text = "fish"; obj.category = 'Code'
  // });

  //   setTasks(tasks =>
  //     [...tasks, formInput]
  //     )
  // }