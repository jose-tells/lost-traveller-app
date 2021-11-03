import React from 'react';
// Components
import UserCommentLayout from './UserCommentLayout';

const UserComments = () => {
  return (
    <section className='userComments__container'>
      <UserCommentLayout
        comment='So I’m looking for good information and this is great!'
      />
      <UserCommentLayout
        comment='Yo this is insane!'
      />
    </section>
  );
};

export default UserComments;
