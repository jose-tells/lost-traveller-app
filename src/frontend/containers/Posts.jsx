/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';
// Redux
import { connect } from 'react-redux';
// Actions
import { getPost, cleanPreview, createPost, getPostSource, createPostComment, removeRanking } from '../actions';
// Pages
import NotFound from './NotFound';
//Components
import PostsInfo from '../components/PostsInfo';
import BackwardsButton from '../components/BackwardsButton';
import LayoutPhoto from '../components/LayoutPhoto';
import WeatherInfo from '../components/WeatherInfo';
import PostHeader from '../components/PostHeader';
import UserPhoto from '../components/UserPhoto';
import PostRankings from '../components/PostRankings';
import RankItem from '../components/RankItem';
import RankingBar from '../components/RankingBar';
import PostReview from '../components/PostReview';
import ForumSection from '../components/ForumSection';
import CommentsSection from '../components/CommentsSection';
import SwipingBar from '../components/SwipingBar';
import Footer from '../components/Footer';
import Loader from './Loader';
import SetRankings from '../components/setRankings';
import PostCreatorInfo from '../components/PostCreatorInfo';
import PostContributors from '../components/PostContributors';
import filterUserContributors from '../Hooks/FilterUserContributors';
// Styles
import '../assets/styles/Posts.styl';

const Posts = (props) => {
  const {
    post,
    user,
    history,
    match,
    cleanPreview,
    getPost,
    getPostSource,
    addRankings,
    createPostComment,
    removeRanking,
    // addRatings,
  } = props;

  const [filteredUsers, setFilteredUsers] = React.useState([]);

  const { id } = match.params;

  const hasPost = Object.keys(post).length > 0;
  const nonePost = Object.keys(post).length === 0;

  useEffect(() => {
    getPost(id);
    return () => {
      cleanPreview({});
      getPostSource({});
    };
  }, []);

  useEffect(() => {
    const filteredUsers = !!post.comments && filterUserContributors(post.comments);
    setFilteredUsers(filteredUsers);
  }, [post.comments]);

  const hasRanking = Object.keys(addRankings || {}).length > 0;
  // const hasRating = Object.keys(addRatings || {}).length > 0;

  if (!hasPost) {
    return <Loader />;
  };

  if (nonePost) {
    return <NotFound />;
  };

  return (
    <>
      <SwipingBar />
      <PostsInfo>
        <LayoutPhoto photo={post.photo} photoName={post.name} />
        <BackwardsButton history={history} />
        <WeatherInfo
          weatherEmoji={post.weather.weatherEmoji[0]}
          weatherName={post.weather.weatherEmoji[1]}
          weatherValue={post.weather.weatherDegree}
        />
        <PostHeader postTitle={post.title} postAveragePrice={post.averagePrice} />
        <PostCreatorInfo postCreator={post.userCreator.name}>
          <UserPhoto
            profilePhoto={post.userCreator.photo}
            username={post.userCreator.username}
            isVerified={post.userCreator.verified}
          />
        </PostCreatorInfo>
        {filteredUsers.length > 0 && (
          <PostContributors postContributors={filteredUsers}>
            {
              filteredUsers.map((user) => (
                <UserPhoto
                  key={user.userId}
                  profilePhoto={user.profilePhoto}
                  username={user.username}
                />
              ))
            }
          </PostContributors>
        )}
      </PostsInfo>
      {(user.id === post.userCreator.id) && <SetRankings postId={id} />}
      <PostRankings>
        {post.rankings.map((rank) => (
          <RankItem
            key={rank.rankId}
            rankId={rank.rankId}
            rankEmoji={rank.rankEmoji[0]}
            rankName={rank.rankEmoji[1]}
            rankStatus={rank.rankStatus}
          />
        ))}
      </PostRankings>
      {hasRanking && (
        <RankingBar
          rankName={addRankings.rankName}
          rankEmoji={addRankings.rankEmoji}
          rankStatus={addRankings.rankStatus}
          removeRanking={removeRanking}
        />
      )}
      <PostReview postReview={post.review} />
      {/* <UserRatingSystem>
        {post.rankings.map((rank) => (
          <RankItem
            key={rank.rankId}
            rankEmoji={rank.rankEmoji[0]}
            rankName={rank.rankEmoji[1]}
            isRating
          />
        ))}
      </UserRatingSystem>
      {hasRating && (
        <RankingBar
          rankEmoji={addRatings.rankEmoji}
          rankName={addRatings.rankName}
          rankStatus={addRatings.rankStatus}
          isRating
        />
      )} */}
      <CommentsSection>
        <ForumSection
          user={user}
          postId={id}
          postComments={post.comments}
          createPostComment={createPostComment}
        />
      </CommentsSection>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    post: state.post,
    user: state.user,
    rankings: state.post.rankings,
    addRankings: state.addRankings,
    // addRatings: state.addRatings,
  };
};

const mapDispatchToProps = {
  getPost,
  cleanPreview,
  createPost,
  getPostSource,
  createPostComment,
  removeRanking,
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
