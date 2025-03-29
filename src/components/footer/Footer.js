import React from "react";
import TasksFilter from "../task-filter";
import './footer.css';

const Footer = ({ setFilter, activeFilter, clearCompleted, counterActiveTask}) => (
  <footer className="footer">
    <span className="todo-count"> { counterActiveTask } items left</span>
    <TasksFilter setFilter={setFilter} activeFilter={activeFilter} />
    <button 
    className="clear-completed"
    onClick={ () => clearCompleted() }
    >Clear completed</button>
  </footer>
);

export default Footer;