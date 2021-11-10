import React, { useState } from 'react';
// Redux
import { connect } from 'react-redux';
//Components
import PostsInfo from '../components/PostsInfo';
import PostMenu from '../components/PostMenu';
import PostRankings from '../components/PostRankings';
import PostReview from '../components/PostReview';
import UserRatingSystem from '../components/UserRatingSystem';
import CommentsSection from '../components/CommentsSection';
import SwipingBar from '../components/SwipingBar';
// Styles
import '../assets/styles/Posts.styl';
import Footer from '../components/Footer';

const Posts = (props) => {
  const { post, addingRanking, rankings, addRankings } = props;
  // console.log(state)

  const [section, setSection] = useState('Contribution');
  const [isContribution, setContribution] = useState(true);
  const [isForum, setForum] = useState(false);

  return (
    <>
      <SwipingBar />
      <PostsInfo post={post} />
      <PostMenu
        setContribution={setContribution}
        setForum={setForum}
        setSection={setSection}
      />
      <PostRankings
        post={post}
        addingRanking={addingRanking}
        addRankings={addRankings}
        rankings={rankings}
      />
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
  );
};

const mapStateToProps = (state) => {
  return {
    post: state.post,
    rankings: state.post.rankings,
    addRankings: state.post.addRankings,
  };
};

export default connect(mapStateToProps, null)(Posts);
