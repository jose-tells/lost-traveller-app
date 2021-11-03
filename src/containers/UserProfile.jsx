import React, { useState } from 'react';
// Components
import UserProfileHeader from '../components/UserProfileHeader';
import UserProfileSections from '../components/UserProfileSections';
import CreatePostButton from '../components/CreatePostButton';
import UserPhotosGrid from '../components/UserPhotosGrid';
import UserComments from '../components/UserComments';
// Styles
import '../assets/styles/UserProfile.styl';

const UserProfile = () => {
  const [userSection, setUserSection] = useState('Posts');

  return (
    <>
      <UserProfileHeader />
      <UserProfileSections setUserSection={setUserSection} />
      <CreatePostButton />
      {userSection.includes('Photos') ? <UserPhotosGrid /> : userSection.includes('Comments') ? <UserComments /> : console.log('Posts')}
    </>
  );
};

export default UserProfile;
