import React from 'react';
import { Link } from 'react-router-dom';
//fontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';

function SlideMenuBar(props) {
  const { open } = props;
  const animationDisplay = () => {
    return {
      height: open ? '50vh' : '0',
    };
  };
  return (
    <div className='menuBar-container' open={open} style={animationDisplay()}>
      <Link to='/' className='menu__links'>Menu</Link>
      <Link to='/' className='menu__links'>Places</Link>
      <Link to='/' className='menu__links'>About</Link>
      <Link to='/' className='menu__links'>Contact</Link>
      <div className='socialMedia-container__menu'>
        <Link to='https://www.instagram.com/projectconquestt/'>
          <FontAwesomeIcon icon={faInstagram} className='icons' />
        </Link>
        <Link to='https://www.youtube.com/channel/UCipdJHJR0MaQhHu1YrGP3Ag'>
          <FontAwesomeIcon icon={faYoutube} className='icons' />
        </Link>
        <Link to='https://discord.gg/TF9zVsN6'>
          <FontAwesomeIcon icon={faDiscord} className='icons' />
        </Link>
        <Link to='https://twitter.com'>
          <FontAwesomeIcon icon={faTwitter} className='icons' />
        </Link>
      </div>
    </div>
  );
};
export default SlideMenuBar;
