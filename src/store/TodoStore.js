import { action, computed, flow, makeObservable, observable, toJS } from 'mobx';

class TodoStore {
  todos = [];

  constructor(todos) {
    this.todos = todos;

    makeObservable(this, {
      todos: observable,
      getTodos: computed,
      fetchTodos: action,
    });
  }

  get getTodos() {
    return this.todos;
  }

  fetchTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => toJS(response))
      .then((json) => {
        console.log(json)
        console.log(this.todos)
      });
  }
}

const todoStore = new TodoStore();

export default todoStore;
