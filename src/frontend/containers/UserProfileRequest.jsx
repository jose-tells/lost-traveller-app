import React, { useEffect, useState } from 'react';
// Redux
import { connect } from 'react-redux';
// Actions
import { getUser } from '../actions';
// Pages
import NotFound from './NotFound';
// Components
import UserProfileHeader from '../components/UserProfileHeader';
import UserProfileSections from '../components/UserProfileSections';
import UserPhotosGrid from '../components/UserPhotosGrid';
import UserComments from '../components/UserComments';
import GridLocations from '../components/GridLocations';
// Styles
import '../assets/styles/UserProfile.styl';
import Loader from './Loader';

const UserProfileRequest = (props) => {
  const { userRequest, location, match, getUser } = props;
  const [loader, setLoader] = useState({
    loading: true,
    error: null,
    data: undefined,
  });

  const hasUser = Object.keys(userRequest).length > 0;

  const { userId } = match.params;

  const fetchData = async () => {
    setLoader({
      loading: true,
      error: null,
    });
    try {
      const data = await getUser(userId);;
      setLoader({ loading: false, data });
    } catch (err) {
      setLoader({ loading: false, error: true });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loader.loading === true && !loader.data) {
    <Loader />;
  }

  if (loader.loading === false && loader.error === true) {
    <NotFound />;
  }

  return hasUser ? (
    <>
      <UserProfileHeader user={userRequest} />
      <UserProfileSections user={userRequest} pathname={location.pathname} />
      {
        location.hash === '#photos' ? <UserPhotosGrid userPhotos={userRequest.contributions.photos} /> :
          location.hash === '#comments' ? (
            <UserComments
              userComments={userRequest.contributions.comments}
              isProfile
            />
          ) : <GridLocations posts={userRequest.contributions.posts} />
      }
    </>
  ) : <NotFound />;
};

const mapStateToProps = (state) => {
  return {
    userRequest: state.userRequest,
  };
};

const mapDispatchToProps = {
  getUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileRequest);
