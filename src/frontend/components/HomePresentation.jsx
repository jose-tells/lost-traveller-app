import React from 'react';
import { Link } from 'react-router-dom';
// Components
import MenuNav from './MenuNav';
import IntroductionTitle from './IntroductionTitle';
// import SlideMenuBar from './SlideMenuBar';
// Media
import Wallpaper from '../assets/img/sanBlassV.jpg';

const HomePresentation = () => {
  return (
    <header className='homePresentation__container'>
      <img src={Wallpaper} className='homePresentation__wallpaper' alt='background' />
      <MenuNav />
      <IntroductionTitle />
      <div className='homePresentation__signInContainer'>
        <Link to='/signIn' className='homePresentation__singInBtn'>Sign In</Link>
      </div>
    </header>
  );
};

export default HomePresentation;
