import React from 'react';
import Wallpaper from '../assets/img/sanBlassV.jpg';

const HomeTemplate = () => {
  return (
    <>
      <img src={Wallpaper} className='walpaper-img' alt='background' />
      <div className='introduction-text'>
        <div className='title-container'>
          <h1 className='title__text'>The Lost Traveller</h1>
        </div>
        <span className='description-text'>
          A guide for every traveller
          who seeks for adventure
        </span>
      </div>
    </>
  );
};

export default HomeTemplate;
