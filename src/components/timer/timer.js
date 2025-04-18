import React, { Component } from 'react';
import './timer.css';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      timeMinutes: props.timeMinutes || 0,
      timeSecundes: props.timeSecundes || 0,
    };

    this.timerId = null;
    this.toggleTimer = this.toggleTimer.bind(this);
  }

  toggleTimer() {
    this.setState(({ active }) => {
      return { active: !this.state.active };
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.active !== this.state.active) {
      if (this.state.active) {
        this.timerId = setInterval(() => {
          this.setState((state) => {
            let { timeMinutes, timeSecundes } = state;

            if (timeMinutes === 0 && timeSecundes === 0) {
              clearInterval(this.timerId);
              return { active: false };
            }

            if (timeSecundes === 0) {
              timeMinutes -= 1;
              timeSecundes = 59;
            } else {
              timeSecundes -= 1;
            }
            return { timeMinutes, timeSecundes };
          });
        }, 1000);
      } else {
        clearInterval(this.timerId);
      }
    }

    if (this.props.condition && this.state.active) {
      this.setState({
        active: false,
      });
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { timeMinutes, timeSecundes } = this.state;
    const classActive = this.state.active ? 'icon icon-pause' : 'icon icon-play';
    console.log(typeof timeMinutes, typeof timeSecundes);
    return (
      <div className="timer">
        <div>
          <button onClick={this.toggleTimer} className={classActive}></button>
        </div>
        <span className="time">{`${timeMinutes}:${timeSecundes} `}</span>
      </div>
    );
  }
}

export default Timer;
