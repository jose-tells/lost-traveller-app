import React from 'react';
// React-router-dom
import { Link } from 'react-router-dom';
// Classnames
import classNames from 'classnames';
// Media
import defaultUser from '../assets/svg/abstract-user-flat-4.svg';

const UserPhoto = (props) => {

  const {
    profilePhoto,
    username,
    isComment,
    isProfile,
    isVerified,
  } = props;

  const profileImageStyles = classNames('postInfo__creator--photoContainer', {
    isComment,
    isProfile,
    isVerified,
  });

  return (
    <Link
      to={`/profile/${username}`}
      className={profileImageStyles}
    >
      <img className='postInfo__creator--photo' src={profilePhoto || defaultUser} alt={username} />
      {isVerified && (
        <img
          className='postInfo__creator--verified'
          src='https://img.icons8.com/ios-filled/48/1D9BF0/instagram-verification-badge.png'
          alt='Verified'
        />
      )}
    </Link>
  );
};

export default UserPhoto;
