import React from 'react';
<<<<<<< HEAD
// import { Link } from 'react-router-dom';
// Components
=======
import { Link } from 'react-router-dom';
//custom-hooks
import useDisplay from '../Hooks/useDisplay';
//componets
import HomeTemplate from '../components/HomeTemplate';
>>>>>>> 656a579dd6065d0ea6e0ddba8b5f8de052cea6b5
import MenuNav from '../components/MenuNav';
import SignInWrapper from '../components/SignInWrapper';
//styles
import '../assets/styles/SignIn.styl';

function SignIn() {
  const { open, handle } = useDisplay();
  return (
<<<<<<< HEAD
    <>
      <MenuNav />
      <SignInWrapper />
    </>
=======
    <div className='sign-in-container'>
      <MenuNav open={open} handleDisplayMenu={handle} />
      <div>
        <SlideMenuBar open={open} handleDisplayMenu={handle} />
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
>>>>>>> 656a579dd6065d0ea6e0ddba8b5f8de052cea6b5
  );
}
export default SignIn;
