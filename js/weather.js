const API_KEY = "b9e77d4ad6f8d9468ca37db8a8438a99";

function onGeoOK(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:nth-child(2)");
            city.innerText= data.name;
            weather.innerText = data.weather[0].main;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError(){
    alert("Can't find you. No waether for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);