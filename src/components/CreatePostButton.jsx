import React from 'react';
// React-router-DOM
import { Link } from 'react-router-dom';

const CreatePostButton = () => {
  return (
    <div className='createPostButton__container'>
      <button className='createPostButton__button' type='button'>
        <Link to='/upload'>
          New Post
        </Link>
      </button>
    </div>
  );
};

export default CreatePostButton;
