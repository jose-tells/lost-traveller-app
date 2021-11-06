import React from 'react';
//styles
import '../assets/styles/Components/FilterWindow.styl';

export default function FilterWindow(props) {
  const { openFilter } = props;
  console.log(openFilter);
  const animationDisplayFilter = () => {
    return {
      height: openFilter ? '35vh' : '0',
    };
  };

  const filterParameters = [
    {
      key: 0,
      filterParameter: 'security',
      emoji: 'https://img.icons8.com/emoji/48/000000/person-police-officer.png',
    },
    {
      key: 1,
      filterParameter: 'Near me',
      emoji: 'https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/000000/external-pin-contact-flatart-icons-flat-flatarticons.png',
    },
    {
      key: 2,
      filterParameter: 'Popular now',
      emoji: 'https://img.icons8.com/emoji/48/000000/fire.png',
    },
    {
      key: 3,
      filterParameter: 'Cold',
      emoji: 'https://img.icons8.com/emoji/48/000000/snowflake-emoji.png',
    },
    {
      key: 4,
      filterParameter: 'Mountains',
      emoji: 'https://img.icons8.com/fluency/48/000000/mountain.png',
    },
    {
      key: 5,
      filterParameter: 'Hotels',
      emoji: 'https://img.icons8.com/external-linector-lineal-color-linector/64/000000/external-hotel-hotel-service-linector-lineal-color-linector.png',
    },
    {
      key: 6,
      filterParameter: 'Camping',
      emoji: 'https://img.icons8.com/external-photo3ideastudio-lineal-color-photo3ideastudio/64/000000/external-camping-holiday-photo3ideastudio-lineal-color-photo3ideastudio.png',
    },
    {
      key: 7,
      filterParameter: 'Accesibility',
      emoji: 'https://img.icons8.com/external-wanicon-lineal-color-wanicon/64/000000/external-road-advertising-wanicon-lineal-color-wanicon.png',
    },
    {
      key: 8,
      filterParameter: 'Top Ranked',
      emoji: 'https://img.icons8.com/ios-glyphs/30/000000/double-up--v1.png',
    },
    {
      key: 9,
      filterParameter: 'Warm',
      emoji: 'https://img.icons8.com/emoji/48/000000/sun-emoji.png',
    },
    {
      key: 10,
      filterParameter: 'Beach',
      emoji: 'https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-beach-summer-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png',
    },
    {
      key: 11,
      filterParameter: 'Waterfalls',
      emoji: 'https://img.icons8.com/external-photo3ideastudio-lineal-color-photo3ideastudio/64/000000/external-waterfall-holiday-photo3ideastudio-lineal-color-photo3ideastudio.png',
    },
    {
      key: 12,
      filterParameter: 'Restaurants',
      emoji: 'https://img.icons8.com/external-photo3ideastudio-lineal-color-photo3ideastudio/64/000000/external-restaurant-building-photo3ideastudio-lineal-color-photo3ideastudio.png',
    },
    {
      key: 13,
      filterParameter: 'Prices',
      emoji: 'https://img.icons8.com/emoji/48/000000/money-mouth-face.png',
    },
  ];
  return (
    <div className='filterWindow-container' style={animationDisplayFilter()}>
      {
        filterParameters.map((parameter) => (
          <div className='filter-items-containers' key={parameter.key}>
            <img className='emoji-filter__window' src={parameter.emoji} alt='emoji' />
            <span>{parameter.filterParameter}</span>
          </div>
        ))
      }
    </div>
  );
}
