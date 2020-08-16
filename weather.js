const API_KEY = "106eb0835a4e62ebe5a78b1d6a247585";
const COORDS = "coords";
const weather = document.querySelector(".js-weather");

function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric` //
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const tem = json.main.temp;
      const place = json.name;
      weather.innerText = `${tem}℃ @${place}`;
    });
}

function saveLocation(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude,
  };
  saveLocation(coordsObj);
  getWeather(latitude, longitude);
}

function handleGeoError() {
  console.log("Can't access geo location");
}

function askForCoords() {
  // 내 위치를 가져오는 함수.
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoord() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords(); // localstorage에 저장되어있는 위치 정보다 없을 때 내 위치 정보를 불러와 준다.
  } else {
    // getWeather
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init() {
  loadCoord();
}

init();
