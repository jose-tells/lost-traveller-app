import React from 'react';
<<<<<<< HEAD
// Components
import MenuNav from '../components/MenuNav';
import SignUpWrapper from '../components/SignUpWrapper';
// Styles
=======
import { Link } from 'react-router-dom';
//custoom-hooks
import useDisplay from '../Hooks/useDisplay';
//components
import HomeTemplate from '../components/HomeTemplate';
import MenuNav from '../components/MenuNav';
import SlideMenuBar from '../components/SlideMenuBar';
//styles
>>>>>>> 656a579dd6065d0ea6e0ddba8b5f8de052cea6b5
import '../assets/styles/SignUp.styl';

const SingUp = () => {
  const { open, handle } = useDisplay();
  return (
    <>
<<<<<<< HEAD
      <MenuNav />
      <SignUpWrapper />
=======
      <div className='sign-up-container'>
        <MenuNav open={open} handleDisplayMenu={handle} />
        <div>
          <SlideMenuBar open={open} handleDisplayMenu={handle} />
        </div>
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
>>>>>>> 656a579dd6065d0ea6e0ddba8b5f8de052cea6b5
    </>
  );
};
export default SingUp;
