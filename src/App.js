import React, { Component } from 'react';

import TaskList from './components/task-list';
import NewTaskForm from './components/new-task-form';
import Footer from './components/footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: [],
      filter: 'all',
    };

    this.addTask = this.addTask.bind(this);
    this.setCompleted = this.setCompleted.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.setFilter = this.setFilter.bind(this);
    this.clearCompleted = this.clearCompleted.bind(this);
    this.updateTaskTime = this.updateTaskTime.bind(this);
    this.toggleTimer = this.toggleTimer.bind(this);
  }

  toggleTimer(id) {
    this.setState(({ taskList }) => {
      const updateList = taskList.map((task) => {
        if (task.id === id) {
          return { ...task, active: !task.active };
        }
        return task;
      });
      return { taskList: updateList };
    });
  }

  updateTaskTime(id, active, timeMinutes, timeSecundes) {
    this.setState(({ taskList }) => {
      const updateList = taskList.map((item) => {
        if (item.id === id) {
          return { ...item, active, timeMinutes, timeSecundes };
        } else {
          return item;
        }
      });
      return { taskList: updateList };
    });
  }

  // END TIMER

  setCompleted(id) {
    this.setState(({ taskList }) => {
      const updateList = taskList.map((item) => (item.id === id ? { ...item, condition: !item.condition } : item));
      return { taskList: updateList };
    });
  }

  deleteTask(id) {
    this.setState(({ taskList }) => {
      const updateList = taskList.filter((task) => task.id !== id);
      return { taskList: updateList };
    });
  }

  createTask(label, timeMinutes, timeSecundes) {
    return {
      id: Math.floor(Math.random() * 100000),
      condition: false,
      description: label,
      date: new Date(),
      timeMinutes: timeMinutes || '',
      timeSecundes: timeSecundes || '',
      active: false,
    };
  }

  addTask(text, timeMinutes, timeSecundes) {
    const newItem = this.createTask(text, timeMinutes, timeSecundes);
    this.setState(({ taskList }) => ({ taskList: [newItem, ...taskList] }));
  }

  setFilter(filter) {
    this.setState({ filter });
  }

  getFilteredTasks() {
    const { taskList, filter } = this.state;
    if (filter === 'active') return taskList.filter((task) => !task.condition);
    if (filter === 'completed') return taskList.filter((task) => task.condition);
    return taskList;
  }

  clearCompleted() {
    this.setState(({ taskList }) => {
      const updateList = taskList.filter((task) => !task.condition);
      return { taskList: updateList };
    });
  }

  counterActiveTask() {
    return this.state.taskList.filter((task) => !task.condition).length;
  }

  render() {
    return (
      <div className="App">
        <section className="todoapp">
          <header className="header">
            <h1>todos</h1>
            <NewTaskForm addTask={this.addTask} />
          </header>
          <section className="main">
            <TaskList
              tasks={this.getFilteredTasks()}
              setCompleted={this.setCompleted}
              deleteTask={this.deleteTask}
              active={this.state.active}
              toggleTimer={this.toggleTimer}
              updateTaskTime={this.updateTaskTime}
            />
            <Footer
              setFilter={this.setFilter}
              activeFilter={this.state.filter}
              clearCompleted={this.clearCompleted}
              counterActiveTask={this.counterActiveTask()}
            />
          </section>
        </section>
      </div>
    );
  }
}

export default App;
