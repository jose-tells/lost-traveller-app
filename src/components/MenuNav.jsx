/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { Link } from 'react-router-dom';
//components
import HamburgerMenu from './HamburgerMenu';
// Images
import travelLogo from '../assets/Svg/logo-travel-Wihte.svg';
//styles
import '../assets/styles/Components/MenuNav.styl';

const MenuNav = (props) => {
  const { open, handleDisplayMenu } = props;

  return (
    <>
      <nav className={open ? 'MenuNav-container__background' : 'MenuNav-container'}>
        <Link to='/' className='logo-container'>
          <img src={travelLogo} className='logo-img' alt='The Lost Traveller Logo' />
        </Link>
        <div className='hamburger-container' onClick={handleDisplayMenu}>
          <HamburgerMenu open={open} handleDisplayMenu={handleDisplayMenu} />
        </div>
      </nav>

    </>
  );
};

export default MenuNav;
