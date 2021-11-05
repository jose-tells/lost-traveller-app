import React from 'react';
// React-router-DOM
import { Link } from 'react-router-dom';

const CreatePostButton = () => {
  return (
    <Link to='/upload' className='createPostButton__container'>
      <button className='createPostButton__button' type='button'>
        New Post
      </button>
    </Link>
  );
};

export default CreatePostButton;
