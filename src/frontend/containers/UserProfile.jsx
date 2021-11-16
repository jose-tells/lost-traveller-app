import React from 'react';
// Redux
import { connect } from 'react-redux';
// Components
import UserProfileHeader from '../components/UserProfileHeader';
import UserProfileSections from '../components/UserProfileSections';
import CreatePostButton from '../components/CreatePostButton';
import UserPhotosGrid from '../components/UserPhotosGrid';
import UserComments from '../components/UserComments';
import GridLocations from '../components/GridLocations';
import NotFound from './NotFound';
// Styles
import '../assets/styles/UserProfile.styl';

const UserProfile = (props) => {
  const { user, location } = props;
  const hasUser = Object.keys(user).length > 0;

  return hasUser ? (
    <>
      <UserProfileHeader user={user} />
      <UserProfileSections user={user} />
      <CreatePostButton />
      {location.hash === '#photos' ? (
        <UserPhotosGrid userPhotos={user.contributions.photos} />
      ) : location.hash === '#comments' ? (
        <UserComments userComments={user.contributions.comments} isProfile />
      ) : (
        <GridLocations posts={user.contributions.posts} />
      )}
    </>
  ) : (
    <NotFound />
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(UserProfile);
