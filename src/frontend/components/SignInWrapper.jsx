import React from 'react';
// Components
import SignInForm from './SignInForm';
// Media
import wallpaperPhoto from '../assets/img/san-BlasH.jpg';

const SignInWrapper = (props) => {
  const { history } = props;
  return (
    <main className='signIn__container'>
      <div className='signIn__wallpaper--container'>
        <img className='signIn__wallpaper' src={wallpaperPhoto} alt='' />
      </div>
      <SignInForm history={history} />
    </main>
  );
};

export default SignInWrapper;
