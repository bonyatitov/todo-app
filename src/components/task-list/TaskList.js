import React from "react";
import Task from "../task";
import './task-list.css'

function TaskList( { tasks, setCompleted, deleteTask } ) {
  return (
    <ul className="todo-list">
      { tasks.map((task) => {
        return <Task 
        key={ task.id } 
        { ...task } 
        condition={ task.condition } 
        setCompleted={ setCompleted } 
        deleteTask={ deleteTask }
        />
      })}
    </ul>
  );
}

export default TaskList;