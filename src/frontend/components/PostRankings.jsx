import React from 'react';

const PostRankings = ({ children }) => {
  return (
    <div className='postRankings__container'>
      <div className='postRankings__flex'>
        {children}
      </div>
    </div>
  );
};

export default PostRankings;
