import React, { useLayoutEffect, useState } from 'react';
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
  const { post, history, match } = props;

  const { id } = match.params;

  useLayoutEffect(() => {
    props.getPostSource(id);
  }, []);

  const [section, setSection] = useState('Contribution');
  const [isContribution, setContribution] = useState(true);
  const [isForum, setForum] = useState(false);

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
      <PostMenu
        setContribution={setContribution}
        setForum={setForum}
        setSection={setSection}
      />
      <PostRankings postRankings={post.rankings} />
      <PostReview />
      <UserRatingSystem post={post} />
      <CommentsSection
        post={post}
        section={section}
        setContribution={setContribution}
        setForum={setForum}
        setSection={setSection}
        isContribution={isContribution}
        isForum={isForum}
      />
      <Footer />
    </>
  ) : <NotFound />;
};

const mapStateToProps = (state) => {
  return {
    post: state.post,
  };
};

const mapDispatchToProps = {
  getPostSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
