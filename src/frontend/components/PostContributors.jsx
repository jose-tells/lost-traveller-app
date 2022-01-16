import React from 'react';

const PostContributors = ({ children, postContributors }) => {

  return (
    <div className='postInfo__contributors'>
      <div className='postInfo__contributors--profiles'>
        {children}
      </div>
      <div className='postInfo__contributors--names'>
        Commented by
        {' '}
        <span className='postInfo__contributors--user'>
          {postContributors[0].username}
        </span>
        {' '}
        {postContributors.length === 2 && (
          <>
            and
            <span className='postInfo__contributors--user'>
              {' '}
              {postContributors[1].username}
            </span>
          </>
        )}
        {postContributors.length > 2 && (
          <>
            <span className='postInfo__contributors--user'>
              ,
              {' '}
              {postContributors[1].username}
              {' '}
            </span>
            and
            {' '}
            {postContributors.length - 2}
            {' '}
            more
          </>
        )}
      </div>
    </div>
  );
};

export default PostContributors;
