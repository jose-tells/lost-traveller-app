import React from 'react';

const WeatherInfo = (props) => {
  const { weatherInfo } = props;

  return (
    <div className='postInfo__weather'>
      <img src={weatherInfo[0]} alt={weatherInfo[1]} />
      <h1>30°</h1>
    </div>
  );
};

export default WeatherInfo;
