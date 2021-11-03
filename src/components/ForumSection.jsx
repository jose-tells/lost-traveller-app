import React from 'react';
// Components
import UserInput from './UserInput';

const ForumSection = () => {
  return (
    <UserInput
      minLength='1'
      maxLength='50'
      placeholder='Your comment'
      isForum
    />
  );
};

export default ForumSection;
