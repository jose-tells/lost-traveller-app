import React from 'react';
// Components
import PostMenuLink from './PostMenuLink';

const PostMenu = () => {
  return (
    <div className='postMenu__container'>
      <PostMenuLink
        altText='Verfied User'
        icon='https://img.icons8.com/ios-filled/48/00998F/instagram-verification-badge.png'
        menuLink='Verified User'
      />
      <PostMenuLink
        altText='Forum'
        icon='https://img.icons8.com/ios-filled/48/00998F/chat--v1.png'
        menuLink='Forum'
      />
      <PostMenuLink
        altText='Contribution'
        icon='https://img.icons8.com/fluency-systems-regular/48/00998F/hand-with-pen.png'
        menuLink='Contribution'
      />
    </div>
  );
};

export default PostMenu;
