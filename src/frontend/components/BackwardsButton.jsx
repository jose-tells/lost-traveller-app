import React from 'react';
// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const BackwardsButton = (props) => {
  const { backwards } = props;

  return (
    <button type='button' onClick={() => backwards.goBack()} className='postInfo__backwardsButton'>
      <FontAwesomeIcon className='postInfo__backwardsButton--icon' icon={faArrowLeft} />
    </button>
  );
};

export default BackwardsButton;
