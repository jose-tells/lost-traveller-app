import React from 'react';

const PostReview = (props) => {
  const { postReview } = props;

  return (
    <>
      <section className='postReview__container'>
        <p className='postReview__text'>
          {postReview}
        </p>
      </section>
    </>
  );
};

export default PostReview;
