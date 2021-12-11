/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
// React-redux
import { connect } from 'react-redux';
import { loginUser } from '../actions';
// Components
import MenuNav from '../components/MenuNav';
import SwitchLogMode from '../components/SwitchLogMode';
// Media
import wallpaperPhoto from '../assets/img/san-BlasH.jpg';
//styles
import '../assets/styles/SignIn.styl';

function SignIn(props) {
  const { loginUser } = props;

  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const [checked, setChecked] = useState(false);

  const handleInput = (event) => {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser(userInfo, checked, '/');
  };

  return (
    <>
      <MenuNav />
      <main className='signIn__container'>
        <div className='signIn__wallpaper--container'>
          <img className='signIn__wallpaper' src={wallpaperPhoto} alt='' />
        </div>
        <div className='signUserForm__container'>
          <form className='signUserForm__form' onSubmit={handleSubmit}>
            <div className='signUserForm__inputContainer'>
              <h2 className='signUserForm__title'>Email</h2>
              <input
                type='email'
                name='email'
                className='signUserForm__input'
                onChange={handleInput}
              />
            </div>
            <div className='signUserForm__inputContainer'>
              <h2 className='signUserForm__title'>Password</h2>
              <input
                type='password'
                name='password'
                className='signUserForm__input'
                onChange={handleInput}
              />
            </div>
            <div className='signUserForm__checkboxContainer'>
              <input
                className='signUserForm__checkboxContainer--checkbox'
                type='checkbox'
                id='keepMe'
                onChange={() => { setChecked(!checked); }}
              />
              <label htmlFor='keepMe'>
                Recuérdame
              </label>
            </div>
            <button type='submit' className='signUserForm__button'>Sign in</button>
          </form>
          <SwitchLogMode link='signUp' linkText='Sign Up' />
        </div>
      </main>
    </>
  );
};

const mapDispatchToProps = {
  loginUser,
};

export default connect(null, mapDispatchToProps)(SignIn);
