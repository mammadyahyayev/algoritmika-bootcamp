// TODO: When user close the window, store them in local storage
// TODO: When user enter the page load all of his todos

let todos = [];

class Todo {
  #todo;
  #id;
  #date;

  constructor(todo) {
    this.#todo = todo;
    this.#date = new Date();
  }

  insertTodo() {
    this.#id = TodoHelper.generateId();
    const todoObj = {
      id: this.#id,
      todo: this.#todo,
      date: this.#date,
    };
    todos.push(todoObj);
    console.log(todos);
  }

  removeTodo(todoId) {
    const copiedTodos = [...todos];
    copiedTodos.filter((todo) => todo.id !== todoId);
    todos = [...copiedTodos];
  }

  sortAscTodos() {
    const copiedTodos = [...todos];

    copiedTodos.sort((firstTodo, secondTodo) => {
      const first = firstTodo.todo.toLowerCase();
      const second = secondTodo.todo.toLowerCase();
      if (first > second) return 1;
      if (first < second) return -1;
      return 0;
    });

    todos = [...copiedTodos];
  }

  sortDescTodos() {
    const copiedTodos = [...todos];

    copiedTodos.sort((firstTodo, secondTodo) => {
      const first = firstTodo.todo.toLowerCase();
      const second = secondTodo.todo.toLowerCase();
      if (first > second) return -1;
      if (first < second) return 1;
      return 0;
    });

    todos = [...copiedTodos];
  }
}

class TodoHelper {
  static generateId() {
    return Math.floor(Math.random() * 100_000_000) + 1;
  }

  static parseDate(date) {
    // parse default date format into dd:MM:yyyy HH:mm:ss
  }
}
