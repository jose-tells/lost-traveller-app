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
import LogInput from '../components/LogInput';
import CheckBox from '../components/CheckBox';
import LogButton from '../components/LogButton';

function SignIn(props) {
  const { loginUser, error } = props;

  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser(userInfo, checked, '/');
  };

  const handleCheck = () => {
    setChecked(!checked);
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
            {error && <p className='signUserForm__error'>*Incorrect Email or password</p>}
            <LogInput
              inputLabel='Email'
              inputType='email'
              inputName='email'
              valueRetrieve={handleChange}
            />
            <LogInput
              inputLabel='Password'
              inputType='password'
              inputName='password'
              valueRetrieve={handleChange}
            />
            <CheckBox handleCheck={handleCheck} />
            <LogButton logText='Log In' />
          </form>
          <SwitchLogMode
            message="Don't have an account?"
            link='signUp'
            linkText='Register'
          />
        </div>
      </main>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    error: state.error,
  };
};

const mapDispatchToProps = {
  loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
