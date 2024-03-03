import React, { useState } from 'react';
import styled from "styled-components";

interface TaskFormProps {
  addTask: (title: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() !== '') {
      addTask(title);
      setTitle('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task..."
      />
      <Button type="submit" className="addTask">Add Task</Button>
    </Form>
  );
};

export default TaskForm;

const Form = styled.form``;

const Input = styled.input`
    border: 1px solid #efefef;
    padding: 12px 24px;
`;
const Button = styled.button`
    display: inline-block;
    outline: none;
    cursor: pointer;
    font-weight: 600;
    border-radius: 3px;
    padding: 12px 24px;
    border: 0;
    color: #3f3a3a;
    background: #1de9b6;
    line-height: 1.15;
    font-size: 16px;
`;

