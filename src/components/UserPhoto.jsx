import React from 'react';
// Classnames
import classNames from 'classnames';

const UserPhoto = (props) => {

  const { firstPhoto, secondPhoto, thirdPhoto, profilePhoto, username, isComment, isProfile, isVerified } = props;

  const profileImageStyles = classNames('postInfo__creator--photoContainer', {
    firstPhoto,
    secondPhoto,
    thirdPhoto,
    isComment,
    isProfile,
    isVerified,
  });

  return (
    <div className={profileImageStyles}>
      <img className='postInfo__creator--photo' src={profilePhoto} alt={username} />
      {isVerified && <img className='postInfo__creator--verified' src='https://img.icons8.com/ios-filled/48/1D9BF0/instagram-verification-badge.png' alt='Verified' />}
    </div>
  );
};

export default UserPhoto;
