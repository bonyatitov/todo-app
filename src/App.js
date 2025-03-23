import React from "react";
import TaskList from './components/task-list'
import NewTaskForm from "./components/new-task-form";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          {/* Форма для добавления */}
          <NewTaskForm />
        </header>
      <section className="main">
        <TaskList />
        <Footer />
      </section>
    </section>
    </div>
  );
}

export default App;
