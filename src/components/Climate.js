import React, { useState } from 'react';
import AppConfig from '../AppConfig';

const CityClimate = () => {

  const [city, setCity] = useState('');
  const [data, setData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = await loadData(city)
    
    setData(data);

  };

const loadData = async (city) => {
  const config = AppConfig.openWheather
  const apiUrl = `${config.baseUrl}/data/2.5/weather?q=${city}&appid=${config.appId}`;
  const response = await fetch(apiUrl);
  return response.json()
}

  return (
    <div className="container mt-5">
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="cityInput" className="form-label">
            Enter City:
          </label>
          <input
            type="text"
            className="form-control"
            id="cityInput"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Get Weather
        </button>
      </form>

      {city && data && data.cod == 200 && (
        <div className="mt-4">
          <h2>Weather Information for {data.name}</h2>
          <p>Temperature: {data.main.temp}°C</p>
          <p>Description: {data.weather[0].description}</p>
          <p>Feels like : {data.main.feels_like}°C</p>
          <p>Humidity : {data.main.humidity}%</p>
          <p>Pressure : {data.main.pressure}</p>
          <p>Wind Speed : {data.wind.speed}m/s</p>
        </div>
      )}

      {data && data.cod != 200 && (
        <h2>{data.message}</h2>
      )}
    </div>
  );
};


export default CityClimate;