import React from 'react';

const CommentsSection = ({ children }) => {
  return (
    <>
      <section className='commentsSection__container'>
        <h2 className='commentsSection__forum'>Comments</h2>
      </section>
      {children}
    </>
  );
};

export default CommentsSection;
