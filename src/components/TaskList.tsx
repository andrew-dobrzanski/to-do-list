import React from 'react';
import styled from "styled-components";

interface Task {
    id: number;
    title: string;
    completed: boolean;
}
  
interface TaskListProps {
    tasks: Task[];
    handleTaskCompletion: (taskId: number) => void;
    handleTaskDeletion: (taskId: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, handleTaskCompletion, handleTaskDeletion }) => {
  return (
    <Tasks>
      {tasks.map((task) => (
        <Task key={task.id}>
          <Input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleTaskCompletion(task.id)}
          />
          <Text style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.title}
          </Text>
          <Button onClick={() => handleTaskDeletion(task.id)}>Delete</Button> {/* Delete button */}
        </Task>
      ))}
    </Tasks>
  );
};

export default TaskList;

const Tasks = styled.ol``;
const Task = styled.li`
    span {
      color: #3f3a3a;
      text-decoration-color: red !important; 
    }
`;
const Input = styled.input``;
const Text = styled.span``;
const Button = styled.button`
    background: transparent;
    border: 0;
    color: #3f3a3a;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.15;
    padding: 0 10px;
    position: relative;
    &:after {
        background-color: #1de9b6;
        bottom: 0;
        content: '';
        height: 2px;
        left: 12px;
        position: absolute;
        width: 65%;
    }
`;
