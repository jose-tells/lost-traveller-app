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
// Styles
import '../assets/styles/UserProfile.styl';

const UserProfile = (props) => {
  const { user, location } = props;

  return (
    <>
      <UserProfileHeader user={user} />
      <UserProfileSections user={user} />
      <CreatePostButton />
      {
        location.hash === '#photos' ? <UserPhotosGrid userPhotos={user.contributions.photos} /> :
          location.hash === '#comments' ? (
            <UserComments
              userComments={user.contributions.comments}
              isProfile
            />
          ) : <GridLocations posts={user.contributions.posts} />
      }

    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(UserProfile);
