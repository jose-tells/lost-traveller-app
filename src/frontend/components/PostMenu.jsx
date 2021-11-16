import React from 'react';
// Components
import PostMenuLink from './PostMenuLink';

const PostMenu = () => {
  return (
    <div className='postMenu__container'>
      <PostMenuLink
        altText='Contribution'
        icon='https://img.icons8.com/fluency-systems-regular/48/00998F/hand-with-pen.png'
        menuLink='Contribution'
      />
      <PostMenuLink
        altText='Verified'
        icon='https://img.icons8.com/ios-filled/48/1D9BF0/instagram-verification-badge.png'
        menuLink='Verified'
      />
      <PostMenuLink
        altText='Forum'
        icon='https://img.icons8.com/ios-filled/48/00998F/chat--v1.png'
        menuLink='Forum'
      />
    </div>
  );
};

export default PostMenu;
