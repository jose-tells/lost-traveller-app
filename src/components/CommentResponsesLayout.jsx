import React from 'react';
// Components
import UserPhoto from './UserPhoto';

const CommentResponsesLayout = (props) => {
  const { comment, profilePhoto, username } = props;

  return (
    <div className='commentResponsesLayout__container'>
      <div className='commentResponsesLayout__item'>
        <p className='userCommentLayout__item--comment'>{comment}</p>
      </div>
      <UserPhoto profilePhoto={profilePhoto} username={username} isComment />
    </div>
  );
};

export default CommentResponsesLayout;
