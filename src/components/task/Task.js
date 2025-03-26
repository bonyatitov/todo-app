import React, { Component } from "react";
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import './task.css';


class Task extends Component {
  
  render() {
    const { id, description, condition, setCompleted, deleteTask } = this.props;
    const created = formatDistanceToNow(new Date(), { addSuffix: true });

    return (
      <li className={ condition ? 'completed' : '' }>
        <div className="view">
          <input onChange={() => setCompleted(id) }  className="toggle" type="checkbox" />
          <label>
            <span className="description">{ description }</span>
            <span className="created">{ created }</span>
          </label>
          <button className="icon icon-edit"></button>
          <button onClick={() => deleteTask(id) } className="icon icon-destroy"></button>
        </div>
      </li>
    );
  }
}

export default Task;