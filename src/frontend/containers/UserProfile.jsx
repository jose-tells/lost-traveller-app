import React, { useEffect } from 'react';
// Redux
import { connect } from 'react-redux';
import { getUserRequest } from '../actions';
// Components
import UserProfileHeader from '../components/UserProfileHeader';
import UserProfileSections from '../components/UserProfileSections';
import CreatePostButton from '../components/CreatePostButton';
import UserPhotosGrid from '../components/UserPhotosGrid';
import UserComments from '../components/UserComments';
import GridLocations from '../components/GridLocations';
import Loader from './Loader';
import NotFound from './NotFound';
// Styles
import '../assets/styles/UserProfile.styl';
import LocationItem from '../components/LocationItem';

const UserProfile = (props) => {
  const { user, userRequest, location, match, getUserRequest } = props;

  const hasUser = Object.keys(userRequest).length > 0;
  const noneUser = Object.keys(userRequest).length === 0;

  const { username } = match.params;

  useEffect(() => {
    getUserRequest(username);
  }, []);

  const isLoggedUser = username === user.username;

  if (!hasUser) {
    return <Loader />;
  }

  if (noneUser) {
    return <NotFound />;
  }

  return (
    <>
      <UserProfileHeader user={userRequest} />
      <UserProfileSections user={userRequest} />
      {(isLoggedUser && user.verified) && <CreatePostButton />}
      {location.hash === '#photos' ? (
        <UserPhotosGrid userPhotos={userRequest.contributions.photos} />
      ) : location.hash === '#comments' ? (
        <UserComments userComments={userRequest.contributions.comments} isProfile />
      ) : (
        <GridLocations>
          {
            userRequest.contributions.posts.map((post) => (
              <LocationItem
                key={post.id}
                postId={post.id}
                postName={post.title}
                postProvince={post.province}
                postCommentsLength={post.comments.length}
                postPhoto={post.photo}
              />
            ))
          }
        </GridLocations>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    userRequest: state.userRequest,
  };
};

const mapDispatchToProps = {
  getUserRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
