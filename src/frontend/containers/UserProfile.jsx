import React, { useState, useEffect } from 'react';
// Redux
import { connect } from 'react-redux';
import { getUser } from '../actions';
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

const UserProfile = (props) => {
  const { user, userRequest, location, match, getUser } = props;

  const hasUser = Object.keys(userRequest).length > 0;

  const [loader, setLoader] = useState({
    loading: true,
    error: null,
    data: undefined,
  });

  const { username } = match.params;

  const fetchData = async () => {
    setLoader({
      loading: true,
      error: null,
    });
    try {
      const data = await getUser(username);
      setLoader({ loading: false, data });
    } catch (err) {
      setLoader({ loading: false, error: true });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const isLoggedUser = username === user.username;

  if (loader.loading === true && !loader.data) {
    <Loader />;
  }

  if (loader.loading === false && loader.error === true) {
    <NotFound />;
  }

  return hasUser && (
    <>
      <UserProfileHeader user={userRequest} />
      <UserProfileSections user={userRequest} />
      {isLoggedUser && <CreatePostButton />}
      {location.hash === '#photos' ? (
        <UserPhotosGrid userPhotos={userRequest.contributions.photos} />
      ) : location.hash === '#comments' ? (
        <UserComments userComments={userRequest.contributions.comments} isProfile />
      ) : (
        <GridLocations posts={userRequest.contributions.posts} />
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
  getUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
