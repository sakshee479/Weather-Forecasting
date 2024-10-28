async function getWeather() {
    const city = document.getElementById('city').value;
    if (!city) {
      alert("Please enter a city name");
      return;
    }
  
    const apiKey = '83110b09440a4a0e8d392045242810';  // Replace with your WeatherAPI key
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();
      
      displayWeather(data);
    } catch (error) {
      document.getElementById('weather-result').innerHTML = `<p>${error.message}</p>`;
    }
  }
  
  function displayWeather(data) {
    const { name, region, country } = data.location;
    const { temp_c, condition, humidity, wind_kph } = data.current;
  
    document.getElementById('weather-result').innerHTML = `
      <h2>${name}, ${region}, ${country}</h2>
      <p>Temperature: ${temp_c}°C</p>
      <p>Condition: ${condition.text}</p>
      <p>Humidity: ${humidity}%</p>
      <p>Wind Speed: ${wind_kph} kph</p>
      <img src="https:${condition.icon}" alt="Weather icon">
    `;
  }
  