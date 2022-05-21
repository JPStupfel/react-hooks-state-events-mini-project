import React, {useState} from "react";


function NewTaskForm({categories, onTaskFormSubmit}) {

  const [formInput, setFormInput] = useState({text: "", category: ""})

  const [task, setTask] = useState('')
  const [category, setCategory] = useState('')

  function handleSubmit(event){
    event.preventDefault()
    onTaskFormSubmit({text: task, category: "Code"})
  }

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input
        type="text"
        name="text"
        value={task}
        onChange = {event=>setTask(event.target.value)}
        />
      </label>
      <label>
        Category
        <select
        name="category"
        value={category}
        onChange={e=>setCategory(e.target.value)}>
          {
          (()=>categories.slice(1).map(e=> <option key={e}>{e}</option>))()
          }
          
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
