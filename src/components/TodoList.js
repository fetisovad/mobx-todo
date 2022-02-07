import { toJS } from 'mobx';
import React, { useEffect } from 'react';
import todoStore from '../store/TodoStore';

const TodoList = () => {
  // console.log(todoStore)
  const todos = todoStore.getTodos;
  // todoStore.fetchTodo();
  console.log(todos)
  // console.log(toJS(todoStore.todos))

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //   .then((response) => response.json())
  //   .then((json) => console.log(json));
  // }, [])

  useEffect(() => {
    todoStore.fetchTodos();
  }, [])

  return (
    <>
      <h1 style={{textAlign: 'center'}}>Hii</h1>
      <div style={{maxWidth: '1140px', margin: '0 auto'}}>
        <ul>
          {/* {todos.map()} */}
        </ul>
      </div>
    </>
  );
};

export default TodoList;