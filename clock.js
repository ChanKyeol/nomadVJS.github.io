const clockClass = document.querySelector(".js-clock");
const clockTime = clockClass.querySelector(".js-time");
const clockDate = clockClass.querySelector(".js-date");

function currentTime() {
  const timeNow = new Date();
  const minutes = timeNow.getMinutes();
  const hours = timeNow.getHours();
  const years = timeNow.getFullYear();
  const month = timeNow.getMonth();
  const date = timeNow.getDate;
  clockTime.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;
}

function init() {
  currentTime();
  setInterval(currentTime, 1000);
}

init();
