import React, { Component } from "react";
import './new-task-form.css'

class  NewTaskForm extends Component{
  
  state = {
    label: '',
  }

  onlabelChanged = (event) => {
    this.setState({
      label: event.target.value,
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addTask(this.state.label);
    this.setState({
      label: ''
    })
  }

  render() {

    return (
      <form onSubmit={ this.onSubmit }>
        <input 
        className="new-todo" 
        placeholder="What needs to be done?" 
        value={ this.state.label }
        autoFocus
        onChange={ this.onlabelChanged }
      />
      </form>
    ) 
  }
  
}

export default NewTaskForm;