import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { useEffect } from 'react';
import { Box, ThemeProvider } from '@mui/material';
import { useMode } from './context/ModeProvider';
import { SwitchTheme } from './components/SwitchTheme';



const App = () => {

  const { theme } = useMode();
  const [todos, setTodos] = useState([]);
  const [todoEdit, setTodoEdit] = useState(null);

  const todoDelete = (todoId) => {
    const changedTodos = todos.filter(todo => todo.id !== todoId)
    setTodos(changedTodos)

  }

  const todoToggleCompleted = (todoId) => {

    const changedTodos = todos.map(todo => todo.id === todoId ? { ...todo, completed: !todo.completed } : todo)

    setTodos(changedTodos)
  }

  const todoAdd = (todo) => {
    const existingTodo = todos.find((t) => t.id === todo.id);

    if (existingTodo) {

      const updatedTodos = todos.map((t) =>
        t.id === existingTodo.id ? todo : t
      );
      setTodos(updatedTodos);
      setTodoEdit(null)
    } else {
      const newTodo = {
        id: uuidv4(),
        ...todo,
        completed: false
      };

      const changedTodos = [
        newTodo,
        ...todos,
      ];

      setTodos(changedTodos);
    }
  };


  useEffect(() => {
    document.body.style.backgroundColor = theme.palette.background.main;
  }, [theme]);


  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        display: 'grid',
        gap: 4,
        padding: { sx: 1, md: 4 },
      }}>

        <SwitchTheme />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 10
          }}>
          <TodoForm
            todoAdd={todoAdd}
            todoEdit={todoEdit}
          />
          <TodoList
            todos={todos}
            todoDelete={todoDelete}
            todoToggleCompleted={todoToggleCompleted}
            setTodoEdit={setTodoEdit}
          />

        </Box>

      </Box>
    </ThemeProvider>
  )
}

export default App
