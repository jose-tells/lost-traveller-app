import React, { useState } from 'react';
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

const Posts = () => {
  const [section, setSection] = useState('Contribution');
  const [isContribution, setContribution] = useState(true);
  const [isForum, setForum] = useState(false);

  return (
    <>
      <SwipingBar />
      <PostsInfo />
      <PostMenu
        setContribution={setContribution}
        setForum={setForum}
        setSection={setSection}
      />
      <PostRankings />
      <PostReview />
      <UserRatingSystem />
      <CommentsSection
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

export default Posts;
