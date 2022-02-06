import React, { useEffect } from 'react';
import TodoStore from '../../store/TodoStore';
import List from './List';

const Todo = () => {
  const todos = TodoStore.getTodos();

  useEffect(() => {
    TodoStore.fetchTodo();
  }, []);

  return (
    <div>
      <h3>Todos</h3>
      <List todos={todos}/>
      <button onClick={TodoStore.fetchTodo}>fetch</button>
      <button onClick={TodoStore.consoleTodo}>console</button>
    </div>
  );
};

export default Todo;
