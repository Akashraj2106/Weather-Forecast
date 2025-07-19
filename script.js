const apiKey = '4151abda1fe172385655bb9860f61c6d'; // Replace with your OpenWeatherMap API key

function getWeather() {
    const city = document.getElementById('cityInput').value;

    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => {
        if (!response.ok) {
            throw new Error("City not found");
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('cityName').textContent = data.name;
        document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
        document.getElementById('description').textContent = `Condition: ${data.weather[0].description}`;
        
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        const icon = document.getElementById('weatherIcon');
        icon.src = iconUrl;
        icon.style.display = 'inline-block';
    })
    .catch(error => {
        alert(error.message);
    });
}


