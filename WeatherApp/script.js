const apiKey = 'a0e33d9c1d0a29bdcae18abd2360cad8';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const searchCity = document.querySelector("#search-city");
const searchBtn = document.querySelector("#search-btn");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (!response.ok) {
        alert("City not found. Please enter a valid city name.");
        return;
    }
    let data = await response.json();
    let weatherImg = document.querySelector(".weather-img");
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
    document.querySelector(".wind-speed").innerHTML = data.wind.speed + ' km/h';
    
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchCity.value);
});
