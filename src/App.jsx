// src/App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import './App.css'; 

function App() {
  // State for managing the list of tasks
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a To-Do App', completed: false },
  ]);

  // Function to add a new task
  const addTask = (taskText) => {
    if (taskText.trim() === '') return;  
    const newTask = {
      id: tasks.length + 1,
      text: taskText,
      completed: false,
    };
    setTasks([...tasks, newTask]);  
  };

  // Function to delete a task by its id
  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);  // Update the state with the remaining tasks
  };

  // Function to toggle the completion state of a task
  const toggleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks); 
  };

  // Function to edit the text of a task
  const editTask = (taskId, newText) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="app-container">
      <Header />
      {/* Passing tasks, addTask, deleteTask, toggleComplete, and editTask as props */}
      <ToDoList 
        tasks={tasks} 
        addTask={addTask} 
        deleteTask={deleteTask} 
        toggleComplete={toggleComplete} 
        editTask={editTask}
      />
    </div>
  );
}

export default App;



