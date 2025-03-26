import React, { Component } from "react";
import TaskList from './components/task-list'
import NewTaskForm from "./components/new-task-form";
import Footer from "./components/footer";



class App extends Component {
  state = {
    taskList: [
      {
        id: 1,
        condition: false,
        description: 'Задача 1',
      },
      {
        id: 2,
        condition: false,
        description: 'Задача 2',
      },
      {
        id: 3,
        condition: false,
        description: 'Задача 3',
      }
    ],
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

  render() {
    return (
      <div className="App">
        <section className="todoapp">
          <header className="header">
            <h1>todos</h1>
            {/* Форма для добавления */}
            <NewTaskForm />
          </header>
        <section className="main">
          <TaskList 
          tasks={ this.state.taskList }
          setCompleted={ this.setCompleted }
          deleteTask={ this.deleteTask }
          />
          <Footer />
        </section>
      </section>
      </div>
    );
  }
}

export default App;
