import React from 'react';

const UserComments = ({ children }) => {
  return (
    <section id='comments' className='userComments__container'>
      {children}
    </section>
  );
};

export default UserComments;
