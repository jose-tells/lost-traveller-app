/* eslint-disable no-use-before-define */
import React, { useEffect, useReducer } from 'react';
// Redux
import { connect } from 'react-redux';
import { getUserRequest, getUser } from '../actions';
// Components
import UserProfileHeader from '../components/UserProfileHeader';
import UserProfileSections from '../components/UserProfileSections';
import CreatePostButton from '../components/CreatePostButton';
import UserPhotosGrid from '../components/UserPhotosGrid';
import UserComments from '../components/UserComments';
import GridLocations from '../components/GridLocations';
import LocationItem from '../components/LocationItem';
import UserProfileButton from '../components/UserProfileButton';
import Loader from './Loader';
import NotFound from './NotFound';
// Styles
import '../assets/styles/UserProfile.styl';
import UserPhoto from '../components/UserPhoto';
import UserCommentLayout from '../components/UserCommentLayout';
import PhotoLayout from '../components/PhotoLayout';

const UserProfile = (props) => {
  const { user, userRequest, match, getUserRequest, getUser } = props;

  const [state, dispatch] = useReducer(reducer, initialState);

  const onPosts = () => dispatch({ type: 'POSTS' });
  const onComments = () => dispatch({ type: 'COMMENTS' });
  const onPhotos = () => dispatch({ type: 'PHOTOS' });

  const hasUser = Object.keys(userRequest).length > 0;
  const noneUser = Object.keys(userRequest).length === 0;

  const { username } = match.params;

  useEffect(() => {
    getUserRequest(username);
    return () => {
      getUser({});
    };
  }, []);

  const isAdminUser = username === user.username && user.isAdmin;

  if (!hasUser) {
    return <Loader />;
  }

  if (noneUser) {
    return <NotFound />;
  }

  return (
    <>
      <UserProfileHeader
        profilePhoto={userRequest.profilePhoto}
        isVerified={userRequest.verified}
        firstName={userRequest.firstName}
        lastName={userRequest.lastName}
        username={userRequest.username}
      >
        <UserPhoto
          profilePhoto={userRequest.profilePhoto}
          username={userRequest.username}
          isProfile
        />
      </UserProfileHeader>
      <UserProfileSections>
        <UserProfileButton
          buttonName='Posts'
          itemsLength={userRequest.contributions.posts.length}
          changeSection={onPosts}
          isSelected={state.posts}
        />
        <UserProfileButton
          buttonName='Comments'
          itemsLength={userRequest.contributions.comments.length}
          changeSection={onComments}
          isSelected={state.comments}
        />
        <UserProfileButton
          buttonName='Photos'
          itemsLength={userRequest.contributions.photos.length}
          changeSection={onPhotos}
          isSelected={state.photos}
        />
      </UserProfileSections>
      {(isAdminUser && user.verified) && <CreatePostButton />}
      {state.photos && (
        <UserPhotosGrid>
          {
            userRequest.contributions.photos.map((photo) => (
              <PhotoLayout
                key={photo.id}
                media={photo.media}
                metadata={photo.metadata}
              />
            ))
          }
        </UserPhotosGrid>
      )}
      {state.comments && (
        <UserComments>
          {
            userRequest.contributions.comments.map((comment) => (
              <UserCommentLayout
                key={comment._id}
                commentPostId={comment.postId}
                comment={comment.content}
                profilePhoto={comment.userCreator.profilePhoto}
                username={comment.userCreator.username}
                isProfile
              />
            ))
          }
        </UserComments>
      )}
      {state.posts && (
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

const initialState = {
  posts: true,
  comments: false,
  photos: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'POSTS':
      return {
        ...state,
        posts: true,
        comments: false,
        photos: false,
      };
    case 'COMMENTS':
      return {
        ...state,
        posts: false,
        comments: true,
        photos: false,
      };
    case 'PHOTOS':
      return {
        ...state,
        posts: false,
        comments: false,
        photos: true,
      };
    default:
      return state;
  };
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    userRequest: state.userRequest,
  };
};

const mapDispatchToProps = {
  getUserRequest,
  getUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
