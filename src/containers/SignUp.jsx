import React from 'react';
import { Link } from 'react-router-dom';
//components
import HomeTemplate from '../components/HomeTemplate';
import MenuNav from '../components/MenuNav';
//styles
import '../assets/styles/SignUp.styl';

const SingUp = () => {
  return (
    <>
      <div className='sign-up-container'>
        <MenuNav />
        <div className='inputsData-container'>
          <input type='text' className='inputs-text' />
          <input type='text' className='inputs-text' />
          <input type='text' className='inputs-text' />
          <input type='mail' className='inputs-text' />
          <input type='passwod' className='inputs-text' />
          <button type='submit' className='register__buttom'>Register</button>
          <div className='question-text__container'>
            <span className='question__text'>Alredy have an account?</span>
            <Link to='/signIn' className='signIn__link'>Sign in</Link>
          </div>
        </div>
        <HomeTemplate />
      </div>
    </>
  );
};
export default SingUp;
