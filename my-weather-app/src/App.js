import React, { useState } from 'react';
import WeatherForm from './WeatherForm';
import Weather from './Weather';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async (city) => {
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();
    setWeatherData(data);
  };

  return (
    <div>
      <h1>Weather App</h1>
      <WeatherForm fetchWeather={fetchWeather} />
      {weatherData && <Weather data={weatherData} />}
    </div>
  );
}

export default App;