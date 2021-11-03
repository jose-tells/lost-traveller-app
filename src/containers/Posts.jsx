import React from 'react';
//Components
import PostsInfo from '../components/PostsInfo';
import PostMenu from '../components/PostMenu';
import PostRankings from '../components/PostRankings';
import PostReview from '../components/PostReview';
import UserRatingSystem from '../components/UserRatingSystem';
import CommentsSection from '../components/CommentsSection';
// Styles
import '../assets/styles/Posts.styl';
import Footer from '../components/Footer';

const Posts = () => {
  return (
    <>
      <PostsInfo />
      <PostMenu />
      <PostRankings />
      <PostReview />
      <UserRatingSystem />
      <CommentsSection />
      <Footer />
    </>
  );
};

export default Posts;
