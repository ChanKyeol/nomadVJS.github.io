const form = document.querySelector(".js-greetingform");
const inputName = form.querySelector(".js-greetingInput");
const helloUser = document.querySelector(".js-greetinguser");

const CURRENT_US = "currentUser";
const SHOWING = "showing";

function saveUserName(text) {
  localStorage.setItem(CURRENT_US, text);
}

function paintUserName(userName) {
  helloUser.classList.add(SHOWING);
  form.classList.remove(SHOWING);
  helloUser.innerText = `Welcome ${userName}😁`;
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = inputName.value;
  saveUserName(currentValue);
  paintUserName(currentValue);
}

function askForUserName() {
  form.classList.add(SHOWING);
  form.addEventListener("submit", handleSubmit);
}

function loadName() {
  const currentUserName = localStorage.getItem(CURRENT_US);
  if (currentUserName === null) {
    askForUserName();
  } else {
    paintUserName(currentUserName);
  }
}

function init() {
  loadName();
}

init();
