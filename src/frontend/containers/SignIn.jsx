import React, { useState } from 'react';
// React-redux
import { connect } from 'react-redux';
import { singInUser } from '../actions';
// Components
import MenuNav from '../components/MenuNav';
import SwitchLogMode from '../components/SwitchLogMode';
// Media
import wallpaperPhoto from '../assets/img/san-BlasH.jpg';
//styles
import '../assets/styles/SignIn.styl';

function SignIn(props) {
  const { singInUser, history } = props;

  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
  });

  const handleInput = (event) => {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    singInUser(userInfo.username);
    history.push('/');
    event.preventDefault();
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
              <h2 className='signUserForm__title'>Username</h2>
              <input type='text' name='username' className='signUserForm__input' onChange={handleInput} />
            </div>
            <div className='signUserForm__inputContainer'>
              <h2 className='signUserForm__title'>Password</h2>
              <input type='password' name='password' className='signUserForm__input' onChange={handleInput} />
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
  singInUser,
};

export default connect(null, mapDispatchToProps)(SignIn);
