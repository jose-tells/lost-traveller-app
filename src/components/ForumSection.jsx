import React from 'react';
// Components
import UserInput from './UserInput';
import UserCommentLayout from './UserCommentLayout';

const ForumSection = (props) => {
  const { postComments, user } = props;

  return (
    <div id='forum'>
      <UserInput
        minLength='1'
        maxLength='50'
        placeholder='Your comment'
        profilePhoto={user.photo}
        username={user.username}
        isForum
      />
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

export default ForumSection;
