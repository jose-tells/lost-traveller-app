import React from 'react';
//Components
import BackwardsButton from './BackwardsButton';
import WeatherInfo from './WeatherInfo';
import UserPhoto from './UserPhoto';

const PostInfo = (props) => {
  const { post } = props;

  return (
    <>
      <div className='postInfo__container'>
        <div className='postInfo'>
          <img className='postInfo__photo' src={post.photo} alt='Post' />
          <BackwardsButton />
          <WeatherInfo weatherInfo={post.weatherEmoji} />
          <div className='postInfo__title'>
            <h1>{post.name}</h1>
            <h2>
              Average Price: $
              {post.averagePrice}
            </h2>
          </div>
          <div className='postInfo__creator'>
            <UserPhoto profilePhoto={post.userCreator.photo} isVerified={post.userCreator.verified} />
            <p className='postInfo__creator--name'>
              Created by
              {' '}
              {post.userCreator.name}
            </p>
          </div>
          <div className='postInfo__contributors'>
            <div className='postInfo__contributors--profiles'>
              <UserPhoto firstPhoto profilePhoto={post.usersContributors[0].photo} />
              <UserPhoto secondPhoto profilePhoto={post.usersContributors[1].photo} />
              <UserPhoto thirdPhoto profilePhoto={post.usersContributors[2].photo} />
              <UserPhoto profilePhoto={post.usersContributors[3].photo} />
            </div>
            <p className='postInfo__contributors--names'>
              Commented by
              {' '}
              {post.usersContributors[0].name}
              ,
              {' '}
              {post.usersContributors[1].name}
              {' '}
              + 5 more
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostInfo;
