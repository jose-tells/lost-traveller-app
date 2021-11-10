import React from 'react';
// Components
import SignUserInput from './SignUserInput';
import SwitchLogMode from './SwitchLogMode';

const SignInForm = () => {
  return (
    <div className='signUserForm__container'>
      <form className='signUserForm__form'>
        <SignUserInput titleInput='Username' />
        <SignUserInput titleInput='Password' />
        <button type='button' className='signUserForm__button'>Sign in</button>
      </form>
      <SwitchLogMode link='signUp' linkText='Sign Up' />
    </div>
  );
};

export default SignInForm;
