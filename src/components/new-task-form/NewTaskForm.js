import React, { Component } from 'react';
import './new-task-form.css';

class NewTaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: '',
      timeMinutes: '',
      timeSecundes: '',
    };

    this.onLabelChanged = this.onLabelChanged.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onMinutesChanged = this.onMinutesChanged.bind(this);
    this.onSecundesChanged = this.onSecundesChanged.bind(this);
  }

  onLabelChanged(event) {
    this.setState({
      label: event.target.value,
    });
  }

  onMinutesChanged(event) {
    this.setState({ timeMinutes: event.target.value });
  }

  onSecundesChanged(event) {
    this.setState({ timeSecundes: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.addTask(this.state.label, this.state.timeMinutes, this.state.timeSecundes);
    console.log('Submit!', this.state);
    this.setState({
      label: '',
      timeMinutes: '',
      timeSecundes: '',
    });
  }

  render() {
    return (
      <form
        onSubmit={this.onSubmit}
        onKeyDown={(event) => {
          if (event.key === 'Enter') this.onSubmit(event);
        }}
      >
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={this.state.label}
          autoFocus
          onChange={this.onLabelChanged}
          autoComplete="off"
        />
        <input
          type="number"
          onChange={this.onMinutesChanged}
          className="input minute-input"
          placeholder="00"
          value={this.state.timeMinutes}
          autoComplete="off"
        />
        <span>:</span>
        <input
          type="number"
          onChange={this.onSecundesChanged}
          className="input secunde-input"
          placeholder="00"
          value={this.state.timeSecundes}
          autoComplete="off"
        />
      </form>
    );
  }
}

export default NewTaskForm;
