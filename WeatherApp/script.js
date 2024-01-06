const apiKey = 'a0e33d9c1d0a29bdcae18abd2360cad8';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const searchCity = document.querySelector("#search-city");
const searchBtn = document.querySelector("#search-btn");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(!response.ok){
        document.querySelector(".error").style.display="block"
        document.querySelector(".details-container").style.display="none"
    }else{
    let data = await response.json();
    console.log(data);
    const weatherImg = document.querySelector(".weather-img")
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
    document.querySelector(".wind-speed").innerHTML = data.wind.speed + ' km/h';
    if(data.weather[0].main == "Clear"){
        weatherImg.src = "images/clear.png"
    }else{
        if(data.weather[0].main == "Clouds"){
            weatherImg.src="images/clouds.png"
        }
        else{
            if(data.weather[0].main == "Haze"){
                weatherImg.src = "images/drizzle.png"
            }
            else{
                if(data.weather[0].main=="Mist"){
                    weatherImg.src = "images/mist.png"
                }
                else{
                    if(data.weather[0].main == "Rain"){
                        weatherImg.src="images/rain.png"
                    }
                    else{
                        if(data.weather[0].main == "Snow"){
                            weatherImg.src = "images/snow.png"
                        }
                    }
                }
            }
        }
    }
    document.querySelector(".error").style.display="none"
        document.querySelector(".details-container").style.display="block"
    
}
}
searchBtn.addEventListener("click", () => {
    checkWeather(searchCity.value);
});
