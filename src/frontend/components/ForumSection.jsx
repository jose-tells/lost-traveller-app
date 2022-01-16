import React, { useRef, useState } from 'react';
// React-router-dom
import { Link } from 'react-router-dom';
// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
// Components
import UserCommentLayout from './UserCommentLayout';
import UserPhoto from './UserPhoto';

const ForumSection = (props) => {
  const { postId, postComments, user, createPostComment } = props;

  const inputComment = useRef(null);

  const handleDeleteInput = () => {
    inputComment.current.value = null;
  };

  const [commentInput, setCommentInput] = useState({
    content: '',
    postId,
    userCreator: {
      userId: user.id,
      username: user.username,
      profilePhoto: user.profilePhoto,
    },
    replies: [],
    date: '',
  });

  const handleInput = (event) => {
    setCommentInput({
      ...commentInput,
      content: event.target.value,
      date: new Date(),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createPostComment(commentInput);
    handleDeleteInput();
  };

  return (
    <div id='forum'>
      {user.id ? (
        <div className='commentsSection__contribution'>
          <UserPhoto profilePhoto={user.profilePhoto} username={user.username} />
          <div className='commentsSection__contribution--container'>
            <form className='commentsSection__contribution--form' onSubmit={handleSubmit}>
              <textarea
                ref={inputComment}
                className='commentsSection__contribution--userInput isForum'
                type='text'
                id='contribution'
                minLength='10'
                placeholder='Dímelo'
                onInput={handleInput}
              />
              <button type='submit' className='commentsSection__contribution--button'>
                <FontAwesomeIcon icon={faPaperPlane} className='commentsSection__contribution--icon' />
              </button>
            </form>
          </div>
        </div>
      ) : (
        <section className='commentsSection__noLogged'>
          <h2 className='commentsSection__noLogged--text'>Be the first to say, awesome place!</h2>
          <Link className='commentsSection__noLogged--link' to='/signIn'>Log In!</Link>
        </section>
      )}
      <section className='userComments__container'>
        {
          postComments.map((comment) => {
            const isLoggedUser = `${user.id}` === comment.userCreator.userId;
            return (
              <UserCommentLayout
                key={comment._id}
                commentId={comment._id}
                comment={comment.content}
                profilePhoto={comment.userCreator.profilePhoto}
                username={comment.userCreator.username}
                replies={comment.replies}
                isForum
                isLoggedUser={isLoggedUser}
              />
            );
          })
        }
      </section>
    </div>
  );
};

export default ForumSection;
