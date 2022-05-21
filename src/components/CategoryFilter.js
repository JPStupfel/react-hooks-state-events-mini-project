import React, {useState} from "react";

function Button({text, filterCallBack, selectCallBack, selected}){
  

  function handleClick(event){
    selectCallBack(event.target.textContent);
    filterCallBack(event)
  }
  return(
    <button 
    onClick = {handleClick}
    className={selected === text ? 'selected' : ''}
    >{text}</button>
  )
}


function CategoryFilter({categories, filterCallBack}) {
  const [selected, setSelected] = useState('')

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {
      (()=>categories.map(e=>
        <Button 
        text={e}
        selected={selected}
        selectCallBack = {setSelected}
        filterCallBack = {filterCallBack}
        key={e}/>))()
      }
    </div>
  );
}

export default CategoryFilter;
