import React from 'react';
// import { Link } from 'react-router-dom';
// Components
import MenuNav from '../components/MenuNav';
import SignInWrapper from '../components/SignInWrapper';
//styles
import '../assets/styles/SignIn.styl';

function SignIn() {
  return (
    <>
      <MenuNav />
      <SignInWrapper />
    </>
  );
}
export default SignIn;
