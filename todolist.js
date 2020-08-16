const todoForm = document.querySelector(".js-todoForm");
const todoInput = todoForm.querySelector(".js-todoInput");
const todoUl = document.querySelector(".js-todoList");

const TODOLIST = "todos";

let todos = [];

function handleDelete(event) {
  const clickBtn = event.target; // 클릭이벤트가 발생한 객체
  const parentLi = clickBtn.parentNode; // 의 부모 호출
  todoUl.removeChild(parentLi); // 해당 리스트 삭제.
  const cleanTodos = todos.filter(function (todo) {
    //배열을 한바퀴 돌면서 true만 반환

    return todo.id !== parseInt(parentLi.id, 10);
  });
  console.log(cleanTodos);
  todos = cleanTodos;
  saveTodos();
}

function saveTodos() {
  localStorage.setItem(TODOLIST, JSON.stringify(todos));
}

function paintTodos(text) {
  console.log(text);
  const addList = document.createElement("li");
  const btnDelete = document.createElement("button");
  const span = document.createElement("span");
  const listId = todos.length + 1;
  btnDelete.innerText = "❌";
  btnDelete.addEventListener("click", handleDelete);
  span.innerText = text;
  addList.appendChild(span);
  addList.appendChild(btnDelete);
  addList.id = listId;
  todoUl.appendChild(addList);
  const todosObj = {
    text: text,
    id: listId,
  };
  todos.push(todosObj);
  saveTodos();
}

function handleSubmit(event) {
  event.preventDefault();
  const inputValue = todoInput.value;
  paintTodos(inputValue);
  todoInput.value = "";
}

function loadTodoList() {
  const loadedTodoList = localStorage.getItem(TODOLIST);
  if (loadedTodoList !== null) {
    console.log(loadedTodoList);
    const parseObj = JSON.parse(loadedTodoList);
    console.log(parseObj);
    parseObj.forEach(function (todo) {
      paintTodos(todo.text);
    });
  }
}

function init() {
  loadTodoList();
  todoForm.addEventListener("submit", handleSubmit);
}

init();
