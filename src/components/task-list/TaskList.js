import React from 'react';

import Task from '../task';
import './task-list.css';

function TaskList({ tasks, setCompleted, deleteTask }) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => {
        return (
          <li key={task.id} className={task.condition ? 'completed' : ''}>
            <Task
              {...task}
              condition={task.condition}
              setCompleted={setCompleted}
              deleteTask={deleteTask}
              taskDate={task.date}
            />
          </li>
        );
      })}
    </ul>
  );
}

TaskList.defaultProps = {
  setComplited: () => {},
  deleteTask: () => {},
};

export default TaskList;
