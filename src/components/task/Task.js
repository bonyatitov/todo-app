import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns/formatDistanceToNow';
import './task.css';

class Task extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, description, condition, setCompleted, deleteTask, taskDate } = this.props;
    const created = formatDistanceToNow(taskDate, { addSuffix: true });
    setInterval(() => created, 1000);
    return (
      <li className={condition ? 'completed' : ''}>
        <div className="view">
          <input onChange={() => setCompleted(id)} className="toggle" type="checkbox" checked={condition} />
          <label>
            <span className="description">{description}</span>
            <span className="created">{created}</span>
          </label>
          <button className="icon icon-edit"></button>
          <button onClick={() => deleteTask(id)} className="icon icon-destroy"></button>
        </div>
      </li>
    );
  }
}

Task.propTypes = {
  id: (props, propName, componentName) => {
    const value = props[propName];
    if (typeof value === 'number' && !isNaN(value)) {
      return null;
    }
    return new TypeError(`${componentName}: ${propName} must be number!`);
  },
};

Task.defaultProps = {
  description: 'Не задано',
};

export default Task;
