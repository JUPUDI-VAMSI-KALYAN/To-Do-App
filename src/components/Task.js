import React, { useState } from 'react';

const Task = ({ task, toggleComplete, deleteTask }) => {
  const [dueDate, setDueDate] = useState(task.dueDate);

  const handleDateChange = (e) => {
    setDueDate(e.target.value);
  };

  return (
    <tr>
      <td>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
        />
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.text}
        </span>
      </td>
      <td>
        <input type="date" value={dueDate} onChange={handleDateChange} />
      </td>
      <td>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default Task;
