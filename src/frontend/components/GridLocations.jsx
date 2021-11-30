import React from 'react';

const GridLocations = ({ children }) => {
  return (
    <section className='locations__container'>
      <ul className='locations__gridContainer'>
        {children}
      </ul>
    </section>
  );
};

export default GridLocations;
