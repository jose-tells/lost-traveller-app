import React from 'react';
// Classnames
import classNames from 'classnames';

const UserPhoto = (props) => {

  const { firstPhoto, secondPhoto, thirdPhoto, testProfilePhoto, isComment, isProfile } = props;

  const profileImageStyles = classNames('postInfo__creator--image', {
    firstPhoto,
    secondPhoto,
    thirdPhoto,
    isComment,
    isProfile,
  });

  return (
    <div className={profileImageStyles}>
      <img src={testProfilePhoto} alt='Profile' />
    </div>
  );
};

export default UserPhoto;
