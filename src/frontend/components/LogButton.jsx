import React from 'react';

const LogButton = ({ logText }) => {
  return (
    <button type='submit' className='signUserForm__button'>{logText}</button>
  );
};

export default LogButton;
