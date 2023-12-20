const apiKey = "efccbf2393f751fd0771cafb2bb40afb";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?unit=metric&name=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWether(city) {
  const response = await fetch(apiUrl + city + "&appid=" + apiKey);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "ºc";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
    document.querySelector(".weather-icon").src ="images/" + data.weather[0].main + ".png";
    document.querySelector(".weather").style.display = "block";
  }
}

searchBtn.addEventListener("click", () => {
  checkWether(searchBox.value);
});
