/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const SignUserInput = (props) => {
  const { titleInput } = props;

  return (
    <div className='signUserForm__inputContainer'>
      <h2 className='signUserForm__title'>{titleInput}</h2>
      <input type='text' className='signUserForm__input' />
    </div>
  );
};

export default SignUserInput;
