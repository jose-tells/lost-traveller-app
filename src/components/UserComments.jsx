import React from 'react';
// Components
import UserCommentLayout from './UserCommentLayout';

const UserComments = (props) => {
  const { userComments, isProfile } = props;

  return (
    <section className='userComments__container'>
      {
        userComments.map((comment) => (
          <UserCommentLayout
            key={comment.id}
            commentPostId={comment.postId}
            comment={comment.content}
            profilePhoto={comment.user.photo}
            username={comment.user.username}
            isProfile={isProfile}
          />
        ))
      }
    </section>
  );
};

export default UserComments;
