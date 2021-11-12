import React from 'react';
import { Link } from 'react-router-dom';
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';
import classNames from 'classnames';

const SlideMenuBar = (props) => {
  const { isOpen } = props;

  const slideMenuBarStyles = classNames('slideMenuBar__container', {
    isOpen,
  });

  return (
    <div className={slideMenuBarStyles}>
      <Link to='/' className='slideMenuBar__links'>Menu</Link>
      <Link to='/' className='slideMenuBar__links'>Places</Link>
      <Link to='/' className='slideMenuBar__links'>About</Link>
      <Link to='/' className='slideMenuBar__links'>Contact</Link>
      <div className='slideMenuBar__icon--container'>
        <Link to='https://www.instagram.com/projectconquestt/'>
          <FontAwesomeIcon icon={faInstagram} className='slideMenuBar__icon--item' />
        </Link>
        <Link to='https://www.youtube.com/channel/UCipdJHJR0MaQhHu1YrGP3Ag'>
          <FontAwesomeIcon icon={faYoutube} className='slideMenuBar__icon--item' />
        </Link>
        <Link to='https://discord.gg/TF9zVsN6'>
          <FontAwesomeIcon icon={faDiscord} className='slideMenuBar__icon--item' />
        </Link>
        <Link to='https://twitter.com'>
          <FontAwesomeIcon icon={faTwitter} className='slideMenuBar__icon--item' />
        </Link>
      </div>
    </div>
  );
};

export default SlideMenuBar;
