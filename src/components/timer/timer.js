import React, { Component } from 'react';
import './timer.css';

class Timer extends Component {
  render() {
    const { timeMinutes, timeSecundes, active, toggleTimer } = this.props;
    const classActive = active ? 'icon icon-pause' : 'icon icon-play';
    console.log(this.props.active);
    return (
      <div className="timer">
        <div>
          <button onClick={toggleTimer} className={classActive}></button>
        </div>
        <span className="time">{`${String(timeMinutes).padStart(2, '0')}:${String(timeSecundes).padStart(2, '0')}`}</span>
      </div>
    );
  }
}

export default Timer;
