// import { makeAutoObservable } from 'mobx';

class TodoStore {
  // constructor() {
  //   makeAutoObservable(this);
  // }

  todos = [];

  getTodos = () => {
    return this.todos;
  }

  addTodo = (todo) => {
    this.todos.push(todo);
  }

  removeTodo = (todo) => {
    this.todos = this.todos.filter((t) => t.id !== todo.id);
  }

  fetchTodo = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => (this.todos = json));
  }

  consoleTodo = () => {
    console.log(this.todos)
  }
}

export default new TodoStore();
