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
        <a href='https://instagram.com/jose_tells/'>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href='https://www.youtube.com/channel/UCwVzRO7kuvnpqfHL74udhIQ/'>
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a href='https://discord.gg/uvc9JyWzJ7/'>
          <FontAwesomeIcon icon={faDiscord} />
        </a>
        <a href='https://twitter.com/jose_tells/'>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
