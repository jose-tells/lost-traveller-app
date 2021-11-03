import React from 'react';
// Components
import PostTextInput from '../components/PostTextInput';
import SubmitPostButton from '../components/SubmitPostButton';
import Footer from '../components/Footer';
import UploadPostPhoto from '../components/UploadPostPhoto';
// Styles
import '../assets/styles/UploadPosts.styl';

const UploadPosts = () => {
  return (
    <>
      <UploadPostPhoto />
      <PostTextInput />
      <SubmitPostButton />
      <Footer />
    </>
  );
};

export default UploadPosts;
