import React from 'react';
// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const BackwardsButton = () => {
  return (
    <div className='postInfo__backwardsButton'>
      <FontAwesomeIcon className='postInfo__backwardsButton--icon' icon={faArrowLeft} />
    </div>
  );
};

export default BackwardsButton;
