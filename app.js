//Select DOM
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//Event Listeners
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);
filterOption.addEventListener("click", filterTodo);

//Functions

function addTodo(e) {
  //Prevent natural behaviour
  e.preventDefault();
  //Create todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //Create list
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  //Save to local - do this last
  //Save to local
  saveLocalTodos(todoInput.value);
  //
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  todoInput.value = "";
  //Create Completed Button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = `<i class="fas fa-check"></i>`;
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  //Create trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  //attach final Todo
  todoList.appendChild(todoDiv);
}

function deleteTodo(e) {
  const item = e.target;

  if (item.classList[0] === "trash-btn") {
    // e.target.parentElement.remove();
    const todo = item.parentElement;
    todo.classList.add("fall");
    //at the end
    removeLocalTodos(todo);
    todo.addEventListener("transitionend", e => {
      todo.remove();
    });
  }
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
    console.log(todo);
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function(todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
    }
  });
}

function saveLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}
function removeLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function(todo) {
    //Create todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create list
    const newTodo = document.createElement("li");
    newTodo.innerText = todo;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    todoInput.value = "";
    //Create Completed Button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = `<i class="fas fa-check"></i>`;
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //Create trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //attach final Todo
    todoList.appendChild(todoDiv);
  });
}

/* THEMES */

const tema1 = document.querySelector(".circulo1");
const tema2 = document.querySelector(".circulo2");
const tema3 = document.querySelector(".circulo3");
const tema4 = document.querySelector(".circulo4");
const html = document.querySelector("html");

tema1.addEventListener("click", cambiartema1);
tema2.addEventListener("click", cambiartema2);
tema3.addEventListener("click", cambiartema3);
tema4.addEventListener("click", cambiartema4);

function cambiartema1() {
  tema1.classList.add("active");
  tema2.classList.remove("active");
  tema3.classList.remove("active");
  tema4.classList.remove("active");
  html.classList.add("tema1");
  html.classList.remove("tema2");
  html.classList.remove("tema3");
  html.classList.remove("tema4");
}
function cambiartema2() {
  tema2.classList.add("active");
  tema1.classList.remove("active");
  tema3.classList.remove("active");
  tema4.classList.remove("active");
  html.classList.add("tema2");
  html.classList.remove("tema1");
  html.classList.remove("tema3");
  html.classList.remove("tema4");
}
function cambiartema3() {
  tema3.classList.add("active");
  tema1.classList.remove("active");
  tema2.classList.remove("active");
  tema4.classList.remove("active");
  html.classList.add("tema3");
  html.classList.remove("tema2");
  html.classList.remove("tema1");
  html.classList.remove("tema4");
}
function cambiartema4() {
  tema4.classList.add("active");
  tema1.classList.remove("active");
  tema2.classList.remove("active");
  tema3.classList.remove("active");
  html.classList.add("tema4");
  html.classList.remove("tema2");
  html.classList.remove("tema3");
  html.classList.remove("tema1");
}

