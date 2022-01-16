import React from 'react';

const PostCreatorInfo = ({ children, postCreator }) => {
  return (
    <div className='postInfo__creator'>
      {children}
      <p className='postInfo__creator--name'>
        Created by
        {' '}
        {postCreator}
      </p>
    </div>
  );
};

export default PostCreatorInfo;
