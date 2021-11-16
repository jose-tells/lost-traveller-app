import React, { useState } from 'react';
import { connect } from 'react-redux';
//actions
import { singInUser } from '../actions/index';
// Components
import SwitchLogMode from './SwitchLogMode';

const SignInForm = (props) => {
  const { singInUser, user, history } = props;
  console.log(user);//only for test
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '', //the password no need to print
  });
  const handleInput = (event) => {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value,
    });
    // console.log(userInfo);
  };
  const handleSubmit = (event) => {
    singInUser(userInfo.username);
    history.push('/');
    event.preventDefault();
  };

  return (
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
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = {
  singInUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
