import React, { useState } from 'react';
import { nanoid } from 'nanoid';

import TaskList from './components/task-list';
import NewTaskForm from './components/new-task-form';
import Footer from './components/footer';

const App = () => {
  const [taskList, setTaskList] = useState([]);
  const [filter, setFilter] = useState('all');

  const createTask = (label, timeMinutes = '', timeSecundes = '') => ({
    id: nanoid(),
    condition: false,
    description: label,
    date: new Date(),
    timeMinutes,
    timeSecundes,
    active: false,
  });

  const addTask = (text, timeMinutes, timeSecundes) => {
    const newTask = createTask(text, timeMinutes, timeSecundes);
    setTaskList((prev) => [newTask, ...prev]);
  };

  const completeTask = (id) => {
    setTaskList((prev) => prev.map((task) => (task.id === id ? { ...task, condition: !task.condition } : task)));
  };

  const deleteTask = (id) => {
    setTaskList((prev) => prev.filter((task) => task.id !== id));
  };

  const toggleTimer = (id) => {
    setTaskList((prev) => prev.map((task) => (task.id === id ? { ...task, active: !task.active } : task)));
  };

  const updateTaskTime = (id, active, timeMinutes, timeSecundes) => {
    setTaskList((prev) => prev.map((task) => (task.id === id ? { ...task, active, timeMinutes, timeSecundes } : task)));
  };

  const clearCompleted = () => {
    setTaskList((prev) => prev.filter((task) => !task.condition));
  };

  const counterActiveTask = () => {
    return taskList.filter((task) => !task.condition).length;
  };

  const getFilteredTasks = () => {
    if (filter === 'active') return taskList.filter((task) => !task.condition);
    if (filter === 'completed') return taskList.filter((task) => task.condition);
    return taskList;
  };

  return (
    <div className="App">
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm addTask={addTask} />
        </header>
        <section className="main">
          <TaskList
            tasks={getFilteredTasks()}
            setCompleted={completeTask}
            deleteTask={deleteTask}
            toggleTimer={toggleTimer}
            updateTaskTime={updateTaskTime}
          />
          <Footer
            setFilter={setFilter}
            activeFilter={filter}
            clearCompleted={clearCompleted}
            counterActiveTask={counterActiveTask()}
          />
        </section>
      </section>
    </div>
  );
};

export default App;
