import React from "react";
import Task from "../task";
import './task-list.css'

function TaskList() {
  
  const taskList = [
    {
      condition: 'completed',
      description: 'Это завершенная задача',
    },
    {
      condition: '',
      description: 'Йоу',
    },
    {
      condition: '',
      description: 'Это активная задача',
    }
  ];

  return (
    <ul className="todo-list">
      { taskList.map((task, i) => {
        return <Task key={ i } { ...task } />
      })}
    </ul>
  );
}

export default TaskList;