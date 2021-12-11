/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Fontawesome
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Classnames
import classNames from 'classnames';
// React-redux
import { connect } from 'react-redux';
import { deletePostComment } from '../actions';
// Components
import UserPhoto from './UserPhoto';
import CommentResponsesLayout from './CommentResponsesLayout';

const UserCommentLayout = (props) => {
  const {
    comment,
    commentId,
    commentPostId,
    profilePhoto,
    replies,
    username,
    isProfile,
    isForum,
    isLoggedUser,
    deletePostComment,
  } = props;

  const userCommentsLayoutContainerStyles = classNames('userCommentLayout__container', {
    isForum,
  });

  const [isShow, showDeleteIcon] = useState(false);

  const handleClick = () => {
    showDeleteIcon(!isShow);
  };

  const handleDelete = () => {
    deletePostComment(commentId);
  };

  const deleteIconStyles = classNames('userCommentLayout__deleteIcon', {
    isShow,
  });

  return (
    <div className={userCommentsLayoutContainerStyles} onClick={isLoggedUser ? handleClick : () => { }}>
      <div className='userCommentLayout__userCommentContainer'>
        <UserPhoto
          profilePhoto={profilePhoto}
          username={username}
          isComment
        />
        <div className='userCommentLayout__commentContainer'>
          <p className='userCommentLayout__commentContainer--comment'>{comment}</p>
        </div>
        <FontAwesomeIcon
          icon={faTrashAlt}
          className={deleteIconStyles}
          onClick={handleDelete}
        />
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
      {isProfile && <Link to={`/post/${commentPostId}#forum`} className='userCommentLayout__commentLink'>View the entire discussion</Link>}
    </div>
  );
};

const mapDispatchToProps = {
  deletePostComment,
};

export default connect(null, mapDispatchToProps)(UserCommentLayout);
