import React from 'react';
// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faDiscord, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className='footer__container'>
      <p className='footer__copyright'>
        © The Lost Traveller. All Rights Reserved
      </p>
      <div className='footer__socialMedia'>
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faYoutube} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faDiscord} />
      </div>
    </footer>
  );
};

export default Footer;
