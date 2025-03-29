import React from "react";
import './task-filter.css';

const TasksFilter = ({ setFilter, activeFilter }) => (
  <ul className="filters">
    <li>
      <button
        className={activeFilter === "all" ? "selected" : ""}
        onClick={() => setFilter("all")}
      >
        All
      </button>
    </li>
    <li>
      <button
        className={activeFilter === "active" ? "selected" : ""}
        onClick={() => setFilter("active")}
      >
        Active
      </button>
    </li>
    <li>
      <button
        className={activeFilter === "completed" ? "selected" : ""}
        onClick={() => setFilter("completed")}
      >
        Completed
      </button>
    </li>
  </ul>
);

export default TasksFilter;