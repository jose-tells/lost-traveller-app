import React from 'react';
// Components
import UserCommentLayout from './UserCommentLayout';

const UserComments = (props) => {
  const { userComments, isProfile } = props;

  return (
    <section id='comments' className='userComments__container'>
      {
        userComments.map((comment) => (
          <UserCommentLayout
            key={comment._id}
            commentPostId={comment.postId}
            comment={comment.content}
            profilePhoto={comment.userCreator.profilePhoto}
            username={comment.userCreator.username}
            isProfile={isProfile}
          />
        ))
      }
    </section>
  );
};

export default UserComments;
