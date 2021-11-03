import React from 'react';
// Components
import UserPhoto from './UserPhoto';
// Media
import photo1 from '../assets/img/PerfilPhoto.jpg';

const UserCommentLayout = (props) => {
  const { comment } = props;

  return (
    <div className='userCommentLayout__container'>
      <UserPhoto testProfilePhoto={photo1} isComment />
      <div className='userCommentLayout__commentContainer'>
        <p className='userCommentLayout__commentContainer--comment'>{comment}</p>
      </div>
      <p className='userCommentLayout__commentLink'>View the entire discussion</p>
    </div>
  );
};

export default UserCommentLayout;
