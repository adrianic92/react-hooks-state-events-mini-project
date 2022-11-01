import React from "react";

function Task({text, category, taskDeleter}) {
  
  function handleDelete() {
    taskDeleter(text)
  }
  
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete} text={text}>X</button>
    </div>
  );
}

export default Task;
