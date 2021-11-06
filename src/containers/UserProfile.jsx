import React, { useState } from 'react';
// Redux
import { connect } from 'react-redux';
// Components
import UserProfileHeader from '../components/UserProfileHeader';
import UserProfileSections from '../components/UserProfileSections';
import CreatePostButton from '../components/CreatePostButton';
import UserPhotosGrid from '../components/UserPhotosGrid';
import UserComments from '../components/UserComments';
// Styles
import '../assets/styles/UserProfile.styl';

const UserProfile = (props) => {
  const { user } = props;

  const [userSection, setUserSection] = useState('Posts');

  return (
    <>
      <UserProfileHeader user={user} />
      <UserProfileSections user={user} setUserSection={setUserSection} />
      <CreatePostButton />
      {userSection.includes('Photos') && <UserPhotosGrid userPhotos={user.contributions.photos} />}
      {userSection.includes('Comments') && <UserComments userComments={user.contributions.comments} isProfile />}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(UserProfile);
