import React from 'react';
import { Link } from 'react-router-dom';
//syles
import '../assets/styles/Components/Footer.styl';
//fontAwersome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <div className='footer-container'>
      <div className='textFooter-container'>
        <span>© 2021 The Lost Traveller. All Right Reserved</span>
      </div>
      <div className='socialMedia-container'>
        <Link to='https://www.instagram.com/projectconquestt/'>
          <FontAwesomeIcon icon={faInstagram} className='continer-icons' />
        </Link>
        <Link to='https://www.youtube.com/channel/UCipdJHJR0MaQhHu1YrGP3Ag'>
          <FontAwesomeIcon icon={faYoutube} className='continer-icons' />
        </Link>
        <Link to='https://discord.gg/TF9zVsN6'>
          <FontAwesomeIcon icon={faDiscord} className='continer-icons' />
        </Link>
        <Link to='https://twitter.com'>
          <FontAwesomeIcon icon={faTwitter} className='continer-icons' />
        </Link>
      </div>
    </div>
  );
}
