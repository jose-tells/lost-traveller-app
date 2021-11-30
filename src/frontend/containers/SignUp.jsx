import React, { useState } from 'react';
// React-redux
import { connect } from 'react-redux';
import { singUpUser } from '../actions';
// Components
import MenuNav from '../components/MenuNav';
import SwitchLogMode from '../components/SwitchLogMode';
// Media
import wallpaperPhoto from '../assets/img/san-BlasH.jpg';
// Styles
import '../assets/styles/SignUp.styl';

const SingUp = (props) => {
  const { singUpUser, history } = props;
  const [userInfo, setUserInfo] = useState({
    id: 236,
    email: '',
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    profilePhoto: '',
    verified: false,
    contributions: {
      posts: [],
      photos: [],
      comments: [],
    },
  });

  const handleInput = (event) => {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmitForm = (event) => {
    singUpUser(userInfo);
    history.push('/profile');
    event.preventDefault();
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
          <img className='signIn__wallpaper' src={wallpaperPhoto} alt='' />
        </div>
        <div className='signUserForm__container' style={styles()}>
          <form className='signUserForm__form' onSubmit={handleSubmitForm}>
            <div className='signUserForm__inputContainer'>
              <h2 className='signUserForm__title'>Email</h2>
              <input type='mail' name='email' className='signUserForm__input' onChange={handleInput} />
            </div>
            <div className='signUserForm__inputContainer'>
              <h2 className='signUserForm__title'>Username</h2>
              <input type='text' name='username' className='signUserForm__input' onChange={handleInput} />
            </div>
            <div className='signUserForm__inputContainer'>
              <h2 className='signUserForm__title'>First Name</h2>
              <input type='text' name='firstName' className='signUserForm__input' onChange={handleInput} />
            </div>
            <div className='signUserForm__inputContainer'>
              <h2 className='signUserForm__title'>Last Name</h2>
              <input type='text' name='lastName' className='signUserForm__input' onChange={handleInput} />
            </div>
            <div className='signUserForm__inputContainer'>
              <h2 className='signUserForm__title'>Password</h2>
              <input type='password' name='password' className='signUserForm__input' onChange={handleInput} />
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
  singUpUser,
};

export default connect(null, mapDispatchToProps)(SingUp);
