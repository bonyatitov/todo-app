import React, { Component } from 'react';
import './new-task-form.css';

class NewTaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: '',
    };

    this.onLabelChanged = this.onLabelChanged.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onLabelChanged(event) {
    this.setState({
      label: event.target.value,
    });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.addTask(this.state.label);
    this.setState({
      label: '',
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={this.state.label}
          autoFocus
          onChange={this.onLabelChanged}
          autoComplete="off"
        />
      </form>
    );
  }
}

export default NewTaskForm;
