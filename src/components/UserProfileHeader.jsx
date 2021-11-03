import React from 'react';
// Components
import UserPhoto from './UserPhoto';
// Media
import photo1 from '../assets/img/PerfilPhoto.jpg';

const UserProfileHeader = () => {
  return (
    <header className='userProfileHeader__container'>
      <div className='userProfileHeader__photoContainer'>
        <img
          className='userProfileHeader__photo'
          src={photo1}
          alt='User-Jose'
        />
      </div>
      <div className='userProfileHeader__info'>
        <UserPhoto testProfilePhoto={photo1} isProfile />
        <h2 className='userProfileHeader__info--name'>
          <img src='https://img.icons8.com/ios-filled/48/00998F/instagram-verification-badge.png' alt='Verified User' />
          Jose Marquinez
        </h2>
        <h3 className='userProfileHeader__info--username'>
          @jose_tells
        </h3>
      </div>
    </header>
  );
};

export default UserProfileHeader;
