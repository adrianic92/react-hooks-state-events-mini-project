import React from "react";
import Task from "./Task.js"

function TaskList({tasks, taskDeleter}) {
  
  const taskList = tasks.map((task,index) => {
    return (
      <Task key={index} text={task.text} category={task.category} id={index} taskDeleter={taskDeleter}/>
    )
  })

  return (
    <div className="tasks">
      {taskList}
    </div>
  );
}

export default TaskList;
