import React, { useState } from 'react';
import { Task } from './types';
import AddTask from './AddTask';
import TaskList from './TaskList';
import TaskListItem from './TaskListItem';
import TaskListHeader from './TaskListHeader';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const onAddTask = (taskName: string) => {
    const newTask: Task = {
      id: new Date().getTime(),
      title: taskName,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  };

  const onUpdateTask = (taskId: number, updatedTask: Task) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return updatedTask;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const onDeleteTask = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Tasks</h1>
      <AddTask onAddTask={onAddTask} />
      <TaskList header={<TaskListHeader count={tasks.length} />}>
        {tasks.map((task) => (
          <TaskListItem
            key={task.id}
            task={task}
            onUpdateTask={onUpdateTask}
            onDeleteTask={onDeleteTask}
          />
        ))}
      </TaskList>
    </div>
  );
}

export default App;
