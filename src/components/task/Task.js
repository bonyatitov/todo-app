import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns/formatDistanceToNow';

import Timer from '../timer';
import './task.css';

class Task extends Component {
  constructor(props) {
    super(props);
    this.startTime = null;
    this.duration = null;
    this.timerId = null;
  }

  componentDidMount() {
    if (this.props.active) {
      this.startTimer();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.active !== this.props.active) {
      if (this.props.active) {
        this.startTimer();
      } else {
        this.stopTimer();
      }
    }

    if (this.props.condition && this.props.active) {
      this.props.toggleTimer(this.props.id);
    }
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  startTimer() {
    const { id, timeMinutes, timeSecundes } = this.props;

    // Длительность в секундах
    this.duration = Number(timeMinutes) * 60 + Number(timeSecundes);
    this.startTime = Date.now();

    this.timerId = setInterval(() => {
      const elapsed = Math.floor((Date.now() - this.startTime) / 1000);
      const remaining = this.duration - elapsed;

      if (remaining <= 0) {
        this.stopTimer();
        this.props.updateTaskTime(id, false, 0, 0);
        return;
      }

      const minutes = Math.floor(remaining / 60);
      const seconds = remaining % 60;

      this.props.updateTaskTime(id, true, minutes, seconds);
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timerId);
    this.timerId = null;
  }

  render() {
    const { id, description, condition, setCompleted, deleteTask, taskDate, timeMinutes, timeSecundes, active } =
      this.props;

    const created = formatDistanceToNow(taskDate, { addSuffix: true });

    return (
      <div className="view">
        <input onChange={() => setCompleted(id)} className="toggle" type="checkbox" checked={condition} />
        <label>
          <span className="description">{description || 'Empty'}</span>
          <Timer
            timeMinutes={timeMinutes}
            timeSecundes={timeSecundes}
            active={active}
            toggleTimer={() => this.props.toggleTimer(id)}
          />
          <span className="created">{created}</span>
        </label>
        <button className="icon icon-edit"></button>
        <button onClick={() => deleteTask(id)} className="icon icon-destroy"></button>
      </div>
    );
  }
}

Task.defaultProps = {
  description: 'Не задано',
};

export default Task;
