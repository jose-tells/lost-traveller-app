import React, { useEffect } from 'react';
// Redux
import { connect } from 'react-redux';
// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
// Actions
import { getPostSource, cleanPreview, createPost } from '../actions';
// Pages
import NotFound from './NotFound';
//Components
import PostsInfo from '../components/PostsInfo';
// import WeatherInfo from '../components/WeatherInfo';
import UserPhoto from '../components/UserPhoto';
// import PostMenu from '../components/PostMenu';
import PostRankings from '../components/PostRankings';
import RankItem from '../components/RankItem';
import RankingBar from '../components/RankingBar';
import PostReview from '../components/PostReview';
import UserRatingSystem from '../components/UserRatingSystem';
import ForumSection from '../components/ForumSection';
// import ContributionSection from '../components/ContributionSection';
import CommentsSection from '../components/CommentsSection';
import SwipingBar from '../components/SwipingBar';
import Footer from '../components/Footer';
import Loader from './Loader';
import SetRankings from '../components/setRankings';
// Styles
import '../assets/styles/Posts.styl';

const Posts = (props) => {
  const {
    post,
    user,
    history,
    match,
    cleanPreview,
    getPostSource,
    addRankings,
    addRatings,
  } = props;

  const { id } = match.params;

  const hasPost = Object.keys(post).length > 0;
  const nonePost = Object.keys(post).length === 0;

  useEffect(() => {
    getPostSource(id);
    return () => {
      cleanPreview({});
    };
  }, []);

  const hasRanking = Object.keys(addRankings || {}).length > 0;
  const hasRating = Object.keys(addRatings || {}).length > 0;

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
        <img className='postInfo__photo' src={post.photo} alt={post.name} />
        <button type='button' onClick={() => history.goBack()} className='postInfo__backwardsButton'>
          <FontAwesomeIcon className='postInfo__backwardsButton--icon' icon={faArrowLeft} />
        </button>
        <div className='postInfo__weather'>
          <img src={post.weather.weatherEmoji[0]} alt={post.weather.weatherEmoji[1]} />
          <h1>
            {post.weather.weatherDegree}
            °
          </h1>
        </div>
        <div className='postInfo__title'>
          <h1>{post.title}</h1>
          <h2>
            Average Price: $
            {post.averagePrice}
          </h2>
        </div>
        <div className='postInfo__creator'>
          <UserPhoto
            profilePhoto={post.userCreator.photo}
            username={post.userCreator.username}
            isVerified={post.userCreator.verified}
          />
          <p className='postInfo__creator--name'>
            Created by
            {' '}
            {post.userCreator.name}
          </p>
        </div>
        {post.usersContributors.length > 0 && (
          <div className='postInfo__contributors'>
            <div className='postInfo__contributors--profiles'>
              <UserPhoto firstPhoto profilePhoto={post.usersContributors[0].photo} username={post.usersContributors[0].username} />
              <UserPhoto secondPhoto profilePhoto={post.usersContributors[1].photo} username={post.usersContributors[1].username} />
              <UserPhoto thirdPhoto profilePhoto={post.usersContributors[2].photo} username={post.usersContributors[2].username} />
              <UserPhoto profilePhoto={post.usersContributors[3].photo} username={post.usersContributors[3].username} />
            </div>
            <p className='postInfo__contributors--names'>
              Commented by
              {' '}
              {post.usersContributors[0].name}
              ,
              {' '}
              {post.usersContributors[1].name}
              {' '}
              +
              {' '}
              {post.usersContributors.length}
              {' '}
              more
            </p>
          </div>
        )}
      </PostsInfo>
      {/* <PostMenu /> */}
      {user.id === post.userCreator.id && <SetRankings postId={id} />}
      <PostRankings>
        <div className='postRankings__container'>
          <div className='postRankings__flex'>
            {post.rankings.map((rank) => (
              <RankItem
                key={rank.rankId}
                rankId={rank.rankId}
                rankEmoji={rank.rankEmoji}
                rankStatus={rank.rankStatus}
              />
            ))}
          </div>
        </div>
        {hasRanking && (
          <RankingBar
            rankName={addRankings.rankName}
            rankEmoji={addRankings.rankEmoji}
            rankStatus={addRankings.rankStatus}
          />
        )}
      </PostRankings>
      <PostReview postReview={post.review} />
      <UserRatingSystem>
        <h1 className='postUserRatingSystem__title'>
          ¿Con tu experiencia en el lugar como la valorarías?
        </h1>
        <div className='postRankings__container'>
          <div className='postRankings__flex'>
            {post.rankings.map((rank) => (
              <RankItem
                key={rank.rankId}
                rankEmoji={rank.rankEmoji}
                isRating
              />
            ))}
          </div>
        </div>
        {hasRating && (
          <RankingBar
            rankName={addRatings.rankName}
            rankEmoji={addRatings.rankEmoji}
            rankStatus={addRatings.rankStatus}
            isRating
          />
        )}
      </UserRatingSystem>
      <CommentsSection>
        <section className='commentsSection__container'>
          <h2 className='commentsSection__forum'>Comentarios</h2>
        </section>
        <ForumSection
          user={user}
          postId={id}
          postComments={post.comments}
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
    addRatings: state.addRatings,
  };
};

const mapDispatchToProps = {
  getPostSource,
  cleanPreview,
  createPost,
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
