/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Classnames
import classNames from 'classnames';
// Use-gesture
// import { useScroll } from '@use-gesture/react';
// Components
import HamburgerMenu from './HamburgerMenu';
import SlideMenuBar from './SlideMenuBar';
// Images
import travelLogo from '../assets/Svg/logo-travel-Wihte.svg';

const MenuNav = ({ hasUser }) => {
  const [isOpen, handleDisplayMenu] = useState(false);

  const [isScrolled] = useState(false);

  const menuNavScrolledStyles = classNames('menuNav__container', {
    isScrolled,
    isOpen,
  });

  // useScroll(({ xy: [, y] }) => { setState(y > 1); }, { target: document });

  return (
    <>
      <nav className={menuNavScrolledStyles}>
        <div className='menuNav__navigationBar--container'>
          <Link to='/' className='menuNav__logo--container'>
            <img src={travelLogo} className='menuNav__logo' alt='The Lost Traveller Logo' />
          </Link>
          <HamburgerMenu
            isOpen={isOpen}
            isScrolled={isScrolled}
            handleDisplayMenu={handleDisplayMenu}
          />
        </div>
        <SlideMenuBar isOpen={isOpen} handleDisplayMenu={handleDisplayMenu} />
      </nav>
    </>
  );
};

export default MenuNav;
