import React from 'react';

const WeatherInfo = ({ weatherEmoji, weatherName, weatherValue }) => {
  return (
    <div className='postInfo__weather'>
      <img src={weatherEmoji} alt={weatherName} />
      <h1>
        {weatherValue}
        °
      </h1>
    </div>
  );
};

export default WeatherInfo;
