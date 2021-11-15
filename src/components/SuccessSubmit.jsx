import React from 'react';
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

const SuccessSubmit = () => {
  return (
    <div className='SuccessSubmit__container'>
      <div className='SuccessSubmit__message--container'>
        <FontAwesomeIcon className='SuccessSubmit__message--icon' icon={faPaperPlane} />
        <h1 className='SuccessSubmit__message--title'>Your contribution has been received!</h1>
      </div>
    </div>
  );
};

export default SuccessSubmit;
