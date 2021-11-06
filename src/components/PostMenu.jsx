import React from 'react';
// Components
import PostMenuLink from './PostMenuLink';

const PostMenu = (props) => {
  const { setContribution, setForum, setSection } = props;

  return (
    <div className='postMenu__container'>
      <PostMenuLink
        altText='Contribution'
        icon='https://img.icons8.com/fluency-systems-regular/48/00998F/hand-with-pen.png'
        menuLink='Contribution'
        setSection={setSection}
        setContribution={setContribution}
        setForum={setForum}
      />
      <PostMenuLink
        altText='Verified'
        icon='https://img.icons8.com/ios-filled/48/1D9BF0/instagram-verification-badge.png'
        menuLink='Verified'
        setSection={setSection}
      />
      <PostMenuLink
        altText='Forum'
        icon='https://img.icons8.com/ios-filled/48/00998F/chat--v1.png'
        menuLink='Forum'
        setSection={setSection}
        setContribution={setContribution}
        setForum={setForum}
      />
    </div>
  );
};

export default PostMenu;
