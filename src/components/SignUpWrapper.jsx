import React from 'react';
// Components
import SignUpForm from './SignUpForm';
// Media
import wallpaperPhoto from '../assets/img/san-BlasH.jpg';

const SignUpWrapper = () => {
  return (
    <>
      <main className='signIn__container'>
        <div className='signIn__wallpaper--container'>
          <img className='signIn__wallpaper' src={wallpaperPhoto} alt='' />
        </div>
        <SignUpForm />
      </main>
    </>
  );
};

export default SignUpWrapper;
