import React from 'react';
import { Link } from 'react-router-dom';
//componets
import HomeTemplate from '../components/HomeTemplate';
import MenuNav from '../components/MenuNav';
//styles
import '../assets/styles/SignIn.styl';
import SlideMenuBar from '../components/SlideMenuBar';

function SignIn() {
  return (
    <div className='sign-in-container'>
      <MenuNav />
      <div>
        <SlideMenuBar />
      </div>
      <div className='inputsSignIn-container'>
        <input type='text' className='inputs-text' />
        <input type='password' className='inputs-text' />
        <button type='submit' className='login__buttom'>Log in</button>
        <div className='question-container'>
          <span className='question__text'>Dont have an account?</span>
          <Link to='/signUp' className='signUp__link'>Sign up</Link>
        </div>
      </div>
      <HomeTemplate />
    </div>
  );
}
export default SignIn;
