// DOM selectors
const todoListElement = document.getElementById("todos");
const todoElement = document.querySelectorAll(".todo");
const insertBtnElement = document.getElementById("insertBtn");
const todoInput = document.getElementById("todo-input");
const toolTipElement = document.getElementById("tooltip-box");
const sortIconElement = document.getElementById("sort-icon");
const deleteIconElement = document.querySelector(".wrong-icon");
const backDropElement = document.querySelector(".backdrop");

let todos = [];
const TIMEOUT = 1000;

class Todo {
  #todo;
  #id;
  #date;

  constructor(todo = "") {
    this.#todo = todo;
    this.#date = new Date();
    this.#id = TodoHelper.generateId();
  }

  insertTodo() {
    const todoObj = {
      id: this.#id,
      todo: this.#todo.trim(),
      date: this.#date,
    };
    todos.push(todoObj);
  }

  createHtmlTodoElement(todo) {
    const todoDiv = DomHelper.createElement("div", {
      className: "todo",
      id: `todo-${todo.#id}`,
    });
    const todoInput = DomHelper.createElement("input", {
      type: "text",
      value: todo.#todo.trim(),
    });
    const wrongIconDiv = DomHelper.createElement("div", {
      className: "wrong-icon",
    });
    const wrongSign = DomHelper.createElement("p", { textContent: "X" });

    wrongIconDiv.appendChild(wrongSign);
    todoDiv.appendChild(todoInput);
    todoDiv.appendChild(wrongIconDiv);
    todoListElement.appendChild(todoDiv);

    return todoDiv;
  }
}

class TodoHelper {
  static generateId() {
    return Math.floor(Math.random() * 100_000_000) + 1;
  }

  static sortAscTodos() {
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

  static sortDescTodos() {
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

  static loadAllTodos() {
    DomHelper.removeAllChildElements(todoListElement);

    todos.forEach((todo) => {
      const todoDiv = DomHelper.createElement("div", {
        className: "todo",
        id: `todo-${todo.id}`,
      });
      const todoInput = DomHelper.createElement("input", {
        type: "text",
        value: todo.todo,
      });
      const wrongIconDiv = DomHelper.createElement("div", {
        className: "wrong-icon",
      });
      const wrongSign = DomHelper.createElement("p", { textContent: "X" });

      wrongIconDiv.appendChild(wrongSign);

      todoDiv.appendChild(todoInput);
      todoDiv.appendChild(wrongIconDiv);

      todoListElement.appendChild(todoDiv);
    });

    todoListElement.scrollTo({ top: 0, behavior: "smooth" });
  }

  static addTodoElement() {
    if (DomHelper.hasElementValue(todoInput)) {
      const todo = new Todo(todoInput.value);
      todo.insertTodo();
      const newTodoElement = todo.createHtmlTodoElement(todo);
      document.getElementById(newTodoElement.id).scrollIntoView();
      todoInput.value = "";
    } else {
      toolTipElement.classList.add("visible");

      setTimeout(() => {
        toolTipElement.classList.remove("visible");
      }, 2000);
    }
  }

  static removeTodo(todoId) {
    let copiedTodos = [...todos];
    copiedTodos = copiedTodos.filter(
      (todo) => todo.id != todoId.replace("todo-", "")
    );
    todos = [...copiedTodos];
  }
}

class DomHelper {
  static createElement(elementType = "div", properties) {
    const element = document.createElement(elementType);
    Object.assign(element, properties);
    return element;
  }

  static hasElementValue(element) {
    if (element.value.trim() === "" || element.value.trim() === null)
      return false;

    return true;
  }

  static removeAllChildElements(parentElement) {
    while (parentElement.firstChild) {
      parentElement.firstChild.remove();
    }
  }

  static removeChildFromList(parentElement, childElement) {
    parentElement.removeChild(childElement);
  }
}

// ****************
//   EVENTS
// ****************
insertBtnElement.addEventListener("click", TodoHelper.addTodoElement);

sortIconElement.addEventListener("click", () => {
  sortIconElement.classList.toggle("rotate");

  if (sortIconElement.classList.contains("rotate")) TodoHelper.sortDescTodos();
  else TodoHelper.sortAscTodos();

  TodoHelper.loadAllTodos();
});

todoListElement.addEventListener("click", (e) => {
  const deleteIcon = e.target.closest("p");
  if (deleteIcon !== null) {
    const todoBox = deleteIcon.closest(".todo");
    const todoId = todoBox.id;
    TodoHelper.removeTodo(todoId);
    DomHelper.removeChildFromList(todoListElement, todoBox);
  }
});

deleteIconElement.addEventListener("click", () => (todoInput.value = ""));

window.addEventListener("beforeunload", () => {
  this.localStorage.removeItem("todos");
  this.localStorage.setItem("todos", JSON.stringify(todos));
});

window.addEventListener("load", () => {
  const fetchedTodos = JSON.parse(window.localStorage.getItem("todos"));
  todos = [...fetchedTodos];
  TodoHelper.loadAllTodos();

  if (todos.length > 0) {
    setTimeout(() => {
      backDropElement.classList.add("invisible");
    }, TIMEOUT);
  } else if (todos.length === 0) {
    backDropElement.classList.add("invisible");
  }
});

backDropElement.classList.remove("invisible");
