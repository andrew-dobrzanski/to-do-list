import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const handleTaskCompletion = (taskId: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleTaskDeletion = (taskId: number) => {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);
  };

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Container>
      <Title>Task List</Title>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        handleTaskCompletion={handleTaskCompletion}
        handleTaskDeletion={handleTaskDeletion}
      />
    </Container>
  );
};

export default App;

const Container = styled.div``;
const Title = styled.h1`
  color: #3f3a3a;
`;
