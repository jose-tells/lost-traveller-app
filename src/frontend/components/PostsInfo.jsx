import React from 'react';
//Components

const PostInfo = ({ children }) => {
  return (
    <>
      <div className='postInfo__container'>
        <div className='postInfo'>
          {children}
        </div>
      </div>
    </>
  );
};

export default PostInfo;
