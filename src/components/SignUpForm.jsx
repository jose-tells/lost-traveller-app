import React from 'react';
// Components
import SignUserInput from './SignUserInput';
import SwitchLogMode from './SwitchLogMode';

const SignUpForm = () => {

  const styles = () => {
    return {
      gridRow: '3/7',
    };
  };

  return (
    <div className='signUserForm__container' style={styles()}>
      <form className='signUserForm__form'>
        <SignUserInput titleInput='Email' />
        <SignUserInput titleInput='First Name' />
        <SignUserInput titleInput='Last Name' />
        <SignUserInput titleInput='Password' />
        <button type='button' className='signUserForm__button'>Sign up</button>
      </form>
      <SwitchLogMode link='signIn' linkText='Sign In' />
    </div>
  );
};

export default SignUpForm;
