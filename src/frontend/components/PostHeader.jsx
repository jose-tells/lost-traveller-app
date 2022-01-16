import React from 'react';

const PostHeader = ({ postTitle, postAveragePrice }) => {
  return (
    <div className='postInfo__title'>
      <h1>{postTitle}</h1>
      <h2>
        Average Price: $
        {postAveragePrice}
      </h2>
    </div>
  );
};

export default PostHeader;
