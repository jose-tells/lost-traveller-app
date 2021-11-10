import React from 'react';
//Components
import BackwardsButton from './BackwardsButton';
import WeatherInfo from './WeatherInfo';
import UserPhoto from './UserPhoto';
// Media
import testPostPhoto from '../assets/img/Bocas-del-Toro-Panama.jpg'

const PostInfo = (props) => {
  const {
    backwards,
    averagePrice,
    postName,
    postPhoto,
    postWeatherEmoji,
    userCreatorName,
    userCreatorUsername,
    userCreatorPhoto,
    userCreatorVerified,
    usersContributors,
  } = props;

  return (
    <>
      <div className='postInfo__container'>
        <div className='postInfo'>
          <img className='postInfo__photo' src={testPostPhoto} alt={postName} />
          <BackwardsButton backwards={backwards} />
          <WeatherInfo weatherInfo={postWeatherEmoji} />
          <div className='postInfo__title'>
            <h1>{postName}</h1>
            <h2>
              Average Price: $
              {averagePrice}
            </h2>
          </div>
          <div className='postInfo__creator'>
            <UserPhoto profilePhoto={userCreatorPhoto} username={userCreatorUsername} isVerified={userCreatorVerified} />
            <p className='postInfo__creator--name'>
              Created by
              {' '}
              {userCreatorName}
            </p>
          </div>
          <div className='postInfo__contributors'>
            <div className='postInfo__contributors--profiles'>
              <UserPhoto firstPhoto profilePhoto={usersContributors[0].photo} username={usersContributors[0].username} />
              <UserPhoto secondPhoto profilePhoto={usersContributors[1].photo} username={usersContributors[1].username} />
              <UserPhoto thirdPhoto profilePhoto={usersContributors[2].photo} username={usersContributors[2].username} />
              <UserPhoto profilePhoto={usersContributors[3].photo} username={usersContributors[3].username} />
            </div>
            <p className='postInfo__contributors--names'>
              Commented by
              {' '}
              {usersContributors[0].name}
              ,
              {' '}
              {usersContributors[1].name}
              {' '}
              +
              {' '}
              {usersContributors.length}
              {' '}
              more
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostInfo;
