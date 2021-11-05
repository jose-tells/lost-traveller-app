import React from 'react';
import { Link } from 'react-router-dom';
// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const BackwardsButton = () => {
  return (
    <Link to='/' className='postInfo__backwardsButton'>
      <FontAwesomeIcon className='postInfo__backwardsButton--icon' icon={faArrowLeft} />
    </Link>
  );
};

export default BackwardsButton;
