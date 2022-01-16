import React from 'react';
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const BackwardsButton = ({ history }) => {
  return (
    <button
      type='button'
      onClick={() => history.goBack()}
      className='postInfo__backwardsButton'
    >
      <FontAwesomeIcon className='postInfo__backwardsButton--icon' icon={faArrowLeft} />
    </button>
  );
};

export default BackwardsButton;
