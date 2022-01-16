import React from 'react';
// Media
import defaultUser from '../assets/svg/abstract-user-flat-4.svg';

const UserProfileHeader = ({ profilePhoto, isVerified, firstName, lastName, username, children }) => {
  return (
    <header className='userProfileHeader__container'>
      <div className='userProfileHeader__photoContainer'>
        <img
          className='userProfileHeader__photo'
          src={profilePhoto || defaultUser}
          alt={username}
        />
      </div>
      <div className='userProfileHeader__info'>
        {children}
        <h2 className='userProfileHeader__info--name'>
          {
            isVerified && <img src='https://img.icons8.com/ios-filled/48/00998F/instagram-verification-badge.png' alt='Verified User' />
          }
          {firstName}
          {' '}
          {lastName}
        </h2>
        <h3 className='userProfileHeader__info--username'>
          @
          {username}
        </h3>
      </div>
    </header>
  );
};

export default UserProfileHeader;
