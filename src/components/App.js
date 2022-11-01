import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";


console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [category, setCategory] = useState("All")
  const exceptAll = CATEGORIES.filter(category => category !== "All")
  function taskDeleter(taskText) {
    const updatedTaskList = tasks.filter( task => (task.text !== taskText))
    setTasks(updatedTaskList)
  }

  function onTaskFormSubmit(newTask) {
    console.log(newTask)
    
    const newArray = [...tasks, newTask]
    setTasks(() => newArray)
  }

  const visibleTasks = tasks.filter(task => {
    if (category === "All") {
      return true
    } else {
      return (task.category === category)
    }
  })

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} category={category} setCategory={setCategory}/>
      <NewTaskForm categories={exceptAll} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={visibleTasks} taskDeleter={taskDeleter}/>
    </div>
  );
}

export default App;
