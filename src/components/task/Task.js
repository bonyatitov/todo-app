import React from "react";
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import './task.css';

function Task({ condition, description }) {
  const created = formatDistanceToNow(new Date(), { addSuffix: true });
  return (
    <li className={ condition }>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>
          <span className="description">{ description }</span>
          <span className="created">{ created }</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
    </li>
  );
}

export default Task;