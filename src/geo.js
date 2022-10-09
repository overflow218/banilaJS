async function succes(position)
{
    const key = "81178287fb893441bf1950d253437586";
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`
    const res = await fetch(url)
    .then((response) => response.json())
    .then((data) => {
        weather.innerText = `${data.main.temp}°, ${data.name}`;
    });
  
}

function fail()
{
    alert("can't get your location");
}

const weather = document.querySelector("#weather");
navigator.geolocation.getCurrentPosition(succes, fail);