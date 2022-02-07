import {makeObservable, observable} from 'mobx';

class TodoStore {
  @observable todos;

  constructor() {
    this.todos = [];

    makeObservable(this);
  }
}

export default TodoStore;
