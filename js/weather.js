const API_KEY = "95eaf6ddac12632fa48010022ae0f776";
// 보안상 취약 -> 서버 측에서 API 호출을 처리하도록 수정

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;

  fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = ` : ${data.weather[0].description} / ${(
        data.main.temp - 273.15
      ).toFixed(2)}°C`;
    });
}

function onGeoError() {
  alert("Can't find you. No wather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
