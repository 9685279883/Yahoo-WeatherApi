
import React, { useState } from 'react';
import Form from '../Components/Form';
import Weather from '../Components/Weather';

const Home = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  
  const {lat, lon} = weatherData;
  const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";
  const handleWeatherFetch = async (city) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric` 
      );

      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }

      const data = await response.json();
      setWeatherData(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div className='App'>
      <h1>Weather Application</h1>
      <Form onWeatherFetch={handleWeatherFetch} />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        weatherData && <Weather data={weatherData} />
      )}
    </div>
  );
};

export default Home;
