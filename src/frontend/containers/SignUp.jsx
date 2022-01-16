import React, { useState } from 'react';
// React-redux
import { connect } from 'react-redux';
// Actions
import { registerUser } from '../actions';
// Components
import MenuNav from '../components/MenuNav';
import LogButton from '../components/LogButton';
import LogInput from '../components/LogInput';
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

  const handleChange = (event) => {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
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
          <form className='signUserForm__form' onSubmit={handleSubmit}>
            <LogInput
              inputLabel='Email'
              inputType='email'
              inputName='email'
              valueRetrieve={handleChange}
            />
            <LogInput
              inputLabel='Username'
              inputType='text'
              inputName='username'
              valueRetrieve={handleChange}
            />
            <LogInput
              inputLabel='First Name'
              inputType='text'
              inputName='firstName'
              valueRetrieve={handleChange}
            />
            <LogInput
              inputLabel='Last Name'
              inputType='text'
              inputName='lastName'
              valueRetrieve={handleChange}
            />
            <LogInput
              inputLabel='Password'
              inputType='password'
              inputName='password'
              valueRetrieve={handleChange}
            />
            <LogButton logText='Sign up' />
          </form>
          <SwitchLogMode
            message='Already have an account?'
            link='signIn'
            linkText='Log in'
          />
        </div>
      </main>
    </>
  );
};

const mapDispatchToProps = {
  registerUser,
};

export default connect(null, mapDispatchToProps)(SingUp);
