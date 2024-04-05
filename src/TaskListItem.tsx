import React, { useState } from 'react';
import { Task } from './types';

type TaskListItemProps = {
  task: Task;
  onUpdateTask: (taskId: number, updatedTask: Task) => void;
  onDeleteTask: (taskId: number) => void;
};

const TaskListItem: React.FC<TaskListItemProps> = ({
  task,
  onUpdateTask,
  onDeleteTask,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState<Task>({ ...task });

  const handleUpdateTask = () => {
    onUpdateTask(task.id, editedTask);
    setIsEditing(false);
  };

  const handleDeleteTask = () => {
    onDeleteTask(task.id);
  };

  return (
    <li>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedTask.title}
            onChange={(e) =>
              setEditedTask({ ...editedTask, title: e.target.value })
            }
          />
          <button onClick={handleUpdateTask}>Save</button>
        </div>
      ) : (
        <div>
          <span>{task.title}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={handleDeleteTask}>Delete</button>
        </div>
      )}
    </li>
  );
};

export default TaskListItem;
