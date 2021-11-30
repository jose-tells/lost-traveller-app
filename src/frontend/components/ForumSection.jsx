import React, { useState } from 'react';
// React-redux
import { connect } from 'react-redux';
// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
// Components
// import UserInput from './UserInput';
import UserCommentLayout from './UserCommentLayout';
import UserPhoto from './UserPhoto';
import { createComment } from '../actions';

const ForumSection = (props) => {
  const { postComments, user, createComment } = props;

  // const maxLength = 50;

  // const [inputLength, setLength] = useState(0);
  const [commentInput, setCommentInput] = useState({
    id: 2,
    user,
    content: '',
    date: '',
    replies: [],
  });

  const handleInput = (event) => {
    // setLength(event.target.value.length);
    setCommentInput({
      ...commentInput,
      content: event.target.value,
      date: new Date(),
    });
    console.log(commentInput);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(commentInput);
    createComment(commentInput);
  };

  return (
    <div id='forum'>
      <div className='commentsSection__contribution'>
        <UserPhoto profilePhoto={user.photo} username={user.username} />
        <div className='commentsSection__contribution--container'>
          <form className='commentsSection__contribution--form' onSubmit={handleSubmit}>
            <textarea
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
          {/* <span className='commentsSection__contribution--textLimit'>
            {inputLength}
            /
            {maxLength}
          </span> */}
        </div>
      </div>
      <section className='userComments__container'>
        {
          postComments.map((comment) => {
            return (
              <UserCommentLayout
                key={comment.id}
                comment={comment.content}
                profilePhoto={comment.user.photo}
                username={comment.user.username}
                replies={comment.replies}
                isForum
              />
            );
          })
        }
      </section>
    </div>
  );
};

const mapDispatchToProps = {
  createComment,
};

export default connect(null, mapDispatchToProps)(ForumSection);
