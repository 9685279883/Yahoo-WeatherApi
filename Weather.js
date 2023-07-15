import React from 'react';

const Weather = ({ data }) => {
  return (
    <div className='App'>
      <h2>{data.location}</h2>
      <p>Temperature: {data.temperature}</p>
      <p>Condition: {data.condition}</p>
    </div>
  );
};

export default Weather;
