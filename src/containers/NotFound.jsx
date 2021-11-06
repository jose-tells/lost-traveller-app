import React from 'react';
import { Link } from 'react-router-dom';
//components
import MenuNav from '../components/MenuNav';
//styles
import '../assets/styles/NotFound.styl';
//img
import notFoundImg from '../assets/Svg/404.svg';
import compasBroken from '../assets/Svg/compassBrokenWhite.svg';

export default function NotFound() {
  return (
    <>
      <div className='menu-container'>
        <MenuNav />
      </div>
      <div className='notFound-container'>
        <div className='ilustration-container'>
          <img src={notFoundImg} alt='404' />
          <h1 className='Notfound__message'>NOT FOUND</h1>
        </div>
        <div className='message-container'>
          <span>
            Oooops! Seems like
            you’re a bit lost
            traveller!
          </span>
        </div>
        <div className='link-places__container'>
          <Link to='/' className='link-text'>Places</Link>
          <img src={compasBroken} alt='compass' className='compass__img' />
        </div>
      </div>
    </>
  );
}
