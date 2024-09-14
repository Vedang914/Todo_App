
import React, { useState } from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ tasks, addTask, deleteTask, toggleComplete, editTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      addTask(newTask);  // Calling addTask function passed as prop
      setNewTask('');  // Clear input field
    }
  };

  return (
    <div className="todo-list">
      <div className="input-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
          className="input-box"
        />
        <button onClick={handleAddTask} className="add-btn">Add Task</button>
      </div>
      
      <ul className="task-list">
        {tasks.map((task) => (
          <ToDoItem
            key={task.id} // Unique key for each item
            task={task}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
            editTask={editTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
