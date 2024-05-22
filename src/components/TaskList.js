import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, filter, setFilter, toggleComplete, deleteTask }) => {
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') {
      return task.completed;
    } else if (filter === 'active') {
      return !task.completed;
    }
    return true;
  });

  return (
    <div>
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('active')}>Active</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Due Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              toggleComplete={toggleComplete}
              deleteTask={deleteTask}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
