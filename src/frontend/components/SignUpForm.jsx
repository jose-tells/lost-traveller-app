import React, { useState } from 'react';
import { connect } from 'react-redux';
//actions
import { singUpUser } from '../actions';
// Components
import SwitchLogMode from './SwitchLogMode';

const SignUpForm = (props) => {
  const { user, singUpUser, history } = props;
  console.log(user); //only to test
  const [userInfo, setUserInfo] = useState({
    id: 236,
    email: '',
    firstName: '',
    lastName: '',
    username: '',
    password: '', //esta mierda no puede esta aqui
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
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = {
  singUpUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
