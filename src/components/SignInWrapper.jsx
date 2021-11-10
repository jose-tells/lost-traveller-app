import React from 'react';
// Components
import SignInForm from './SignInForm';
// Media
import wallpaperPhoto from '../assets/img/san-BlasH.jpg';

const SignInWrapper = () => {
  return (
    <main className='signIn__container'>
      <div className='signIn__wallpaper--container'>
        <img className='signIn__wallpaper' src={wallpaperPhoto} alt='' />
      </div>
      <SignInForm />
    </main>
  );
};

export default SignInWrapper;
