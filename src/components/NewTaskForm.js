import React from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  return (
    <form onSubmit={onTaskFormSubmit} className="new-task-form">
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
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
