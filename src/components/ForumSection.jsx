import React from 'react';
// Components
import UserInput from './UserInput';

const ForumSection = () => {
  return (
    <div id='forum'>
      <UserInput
        minLength='1'
        maxLength='50'
        placeholder='Your comment'
        isForum
      />
    </div>
  );
};

export default ForumSection;
