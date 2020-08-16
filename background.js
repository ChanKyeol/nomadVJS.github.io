const body = document.querySelector("body");

const IMAGE_NUM = 4;

function ganRandomNum() {
  const number = Math.floor(Math.random() * IMAGE_NUM) + 1;
  return number;
}

function callBg(rn) {
  const image = new Image();
  image.src = `images/${rn}.jpg`;
  body.appendChild(image);
  image.classList.add("bgImage");
}

function init() {
  const randomNumber = ganRandomNum();
  callBg(randomNumber);
}

init();
