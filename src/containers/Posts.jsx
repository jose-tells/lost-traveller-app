import React, { useLayoutEffect } from 'react';
// Redux
import { connect } from 'react-redux';
// Actions
import { getPostSource } from '../actions';
// Pages
import NotFound from './NotFound';
//Components
import PostsInfo from '../components/PostsInfo';
import PostMenu from '../components/PostMenu';
import PostRankings from '../components/PostRankings';
import PostReview from '../components/PostReview';
import UserRatingSystem from '../components/UserRatingSystem';
import CommentsSection from '../components/CommentsSection';
import SwipingBar from '../components/SwipingBar';
import Footer from '../components/Footer';
// Styles
import '../assets/styles/Posts.styl';

const Posts = (props) => {
  const { post, history, match, location } = props;

  const { id } = match.params;

  useLayoutEffect(() => {
    props.getPostSource(id);
  }, []);

  return Object.keys(post).length > 0 ? (
    <>
      <SwipingBar />
      <PostsInfo
        backwards={history}
        averagePrice={post.averagePrice}
        postName={post.name}
        postPhoto={post.photo}
        postWeatherEmoji={post.weatherEmoji}
        userCreatorName={post.userCreator.name}
        userCreatorUsername={post.userCreator.username}
        userCreatorPhoto={post.userCreator.photo}
        userCreatorVerified={post.userCreator.verified}
        usersContributors={post.usersContributors}
      />
      <PostMenu />
      <PostRankings postRankings={post.rankings} />
      <PostReview postReview={post.review} />
      <UserRatingSystem postRankings={post.rankings} />
      <CommentsSection
        postId={id}
        location={location}
        postComments={post.comments}
      />
      <Footer />
    </>
  ) : <NotFound />;
};

const mapStateToProps = (state) => {
  return {
    post: state.post,
    rankings: state.post.rankings,
    addRankings: state.post.addRankings,
  };
};

const mapDispatchToProps = {
  getPostSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
