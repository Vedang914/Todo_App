// src/components/ToDoItem.jsx
import React, { useState } from 'react';

const ToDoItem = ({ task, deleteTask, toggleComplete, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleSave = () => {
    editTask(task.id, newText);
    setIsEditing(false);
  };

  return (
    <li className="task-item" style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          className="edit-input"
        />
      ) : (
        <span>{task.text}</span>
      )}

      <div className="task-buttons">
        {isEditing ? (
          <button onClick={handleSave} className="save-btn">Save</button>
        ) : (
          <>
            <button onClick={() => toggleComplete(task.id)} className="complete-btn">
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => setIsEditing(true)} className="edit-btn">Edit</button>
          </>
        )}
        <button onClick={() => deleteTask(task.id)} className="delete-btn">Delete</button>
      </div>
    </li>
  );
};

export default ToDoItem;
