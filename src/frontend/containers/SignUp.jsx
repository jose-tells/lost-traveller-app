import React, { useState } from 'react';
// React-redux
import { connect } from 'react-redux';
import { registerUser } from '../actions';
// Components
import MenuNav from '../components/MenuNav';
import SwitchLogMode from '../components/SwitchLogMode';
// Media
import wallpaperPhoto from '../assets/img/san-BlasH.jpg';
// Styles
import '../assets/styles/SignUp.styl';

const SingUp = (props) => {
  const { registerUser } = props;
  const [userInfo, setUserInfo] = useState({
    email: '',
    firstName: '',
    lastName: '',
    username: '',
    password: '',
  });

  const handleInput = (event) => {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    registerUser(userInfo, '/signIn');
  };

  const styles = () => {
    return {
      gridRow: '3/7',
    };
  };

  return (
    <>
      <MenuNav />
      <main className='signIn__container'>
        <div className='signIn__wallpaper--container'>
          <img
            className='signIn__wallpaper'
            src={wallpaperPhoto}
            alt=''
          />
        </div>
        <div className='signUserForm__container' style={styles()}>
          <form className='signUserForm__form' onSubmit={handleSubmitForm}>
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
              <h2 className='signUserForm__title'>Username</h2>
              <input
                type='text'
                name='username'
                className='signUserForm__input'
                onChange={handleInput}
              />
            </div>
            <div className='signUserForm__inputContainer'>
              <h2 className='signUserForm__title'>First Name</h2>
              <input
                type='text'
                name='firstName'
                className='signUserForm__input'
                onChange={handleInput}
              />
            </div>
            <div className='signUserForm__inputContainer'>
              <h2 className='signUserForm__title'>Last Name</h2>
              <input
                type='text'
                name='lastName'
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
            <button type='submit' className='signUserForm__button'>Sign up</button>
          </form>
          <SwitchLogMode link='signIn' linkText='Sign In' />
        </div>
      </main>
    </>
  );
};

const mapDispatchToProps = {
  registerUser,
};

export default connect(null, mapDispatchToProps)(SingUp);
