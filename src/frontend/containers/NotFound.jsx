import React from 'react';
import { Link } from 'react-router-dom';
//styles
import '../assets/styles/NotFound.styl';
//img
import compassBroken from '../assets/svg/compassBrokenWhite.svg';

export default function NotFound() {
  return (
    <>
      {/* <MenuNav /> */}
      <main className='notFound__container'>
        <div className='notFoundCode__container'>
          <div className='notFoundCode__number--container'>
            <h1 className='notFoundCode__number'>4</h1>
            <img className='notFoundCode__image' src={compassBroken} alt='404' />
            <h1 className='notFoundCode__number'>4</h1>
          </div>
          <h2 className='notfound__title'>NOT FOUND</h2>
        </div>
        <div className='notFound__message--container'>
          <h2 className='notFound__message'>
            Oooops! Seems like
            <br />
            you’re a bit lost
            <br />
            traveller!
          </h2>
        </div>
        <Link to='/' className='linkPlaces__container'>
          <h3 className='linkPlaces__text'>Places</h3>
          <img src={compassBroken} alt='compass' className='linkPlaces__image' />
        </Link>
      </main>
    </>
  );
}
