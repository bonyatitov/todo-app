import React, { Component } from "react";
import TaskList from './components/task-list'
import NewTaskForm from "./components/new-task-form";
import Footer from "./components/footer";



class App extends Component {
  state = {
    taskList: [],
    filter: 'all',
  }

  setCompleted = (id) => {
    this.setState(({ taskList }) => {
      const updateList = taskList.map((item) => {
        if (item.id === id) {
          return { ...item, condition: !item.condition};
        }
        return item;
      })
      return {taskList: updateList}
    })
  }

  deleteTask = (id) => {
    this.setState(({ taskList }) => {
      const updateList = taskList.filter(task => task.id !== id);
      return {taskList: updateList};
    })
  }

  createTask(label) {
    let uniqueId = Math.floor(Math.random() * 100000);

    return {
      id: uniqueId,
      condition: false,
      description: label,
    }
  }

  addTask = (text) => {
    const newItem = this.createTask(text);

    this.setState(({ taskList }) => {
      const updateList = [newItem, ...taskList];
      return {taskList: updateList};
    });
  }

  setFilter = (filter) => {
    this.setState({ filter });
  }

  getFiltredTasks = () => {
    const { taskList, filter } = this.state;
    if (filter === 'active') return taskList.filter((task) => !task.condition);
    if (filter === 'completed') return taskList.filter((task) => task.condition);
    return taskList;
  }

  clearCompleted = () => {
    this.setState(({ taskList }) => {
      const updateList = taskList.filter(task => !task.condition);
      return { taskList: updateList };
    })
  }

  counterActiveTask = () => {
    return this.state.taskList.filter(task => !task.condition).length;
  }

  render() {
    return (
      <div className="App">
        <section className="todoapp">
          <header className="header">
            <h1>todos</h1>
            {/* Форма для добавления */}
            <NewTaskForm 
            addTask={ this.addTask }/>
          </header>
        <section className="main">
          <TaskList 
          tasks={ this.getFiltredTasks() }
          setCompleted={ this.setCompleted }
          deleteTask={ this.deleteTask }
          />
          <Footer 
            setFilter={ this.setFilter }
            activeFilter={ this.state.filter }
            clearCompleted={ this.clearCompleted }
            counterActiveTask={ this.counterActiveTask() }
          />
        </section>
      </section>
      </div>
    );
  }
}

export default App;
