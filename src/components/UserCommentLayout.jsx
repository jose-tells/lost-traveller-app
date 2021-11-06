import React from 'react';
import { Link } from 'react-router-dom';
// Components
import UserPhoto from './UserPhoto';
import CommentResponsesLayout from './CommentResponsesLayout';

const UserCommentLayout = (props) => {
  const { comment, profilePhoto, replies, username, isProfile, isForum } = props;

  console.log(replies);

  return (
    <div className='userCommentLayout__container'>
      <div className='userCommentLayout__userCommentContainer'>
        <UserPhoto profilePhoto={profilePhoto} username={username} isComment />
        <div className='userCommentLayout__commentContainer'>
          <p className='userCommentLayout__commentContainer--comment'>{comment}</p>
        </div>
      </div>
      <div className='userCommentLayout__responses'>
        {isForum && replies.map((reply) => (
          <CommentResponsesLayout
            key={reply.id}
            comment={reply.content}
            profilePhoto={reply.user.profilePhoto}
            username={reply.user.username}
          />
        ))}
      </div>
      {isProfile && <Link to='/posts#forum' className='userCommentLayout__commentLink'>View the entire discussion</Link>}
    </div>
  );
};

export default UserCommentLayout;
