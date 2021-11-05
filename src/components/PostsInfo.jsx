import React from 'react';
// Redux
import { connect } from 'react-redux';
//Components
import BackwardsButton from './BackwardsButton';
import WeatherInfo from './WeatherInfo';
import UserPhoto from './UserPhoto';
// Media
import testPhoto from '../assets/img/Costa-del-Este-PS-edit.jpg';
// Media
import photo1 from '../assets/img/PerfilPhoto.jpg';
import photo2 from '../assets/img/Plano escorzo.jpg';
import photo3 from '../assets/img/Portfolio_-6.jpg';
import photo4 from '../assets/img/Bogotá StreetP.jpg';

const PostInfo = () => {
  return (
    <>
      <div className='postInfo__container'>
        <div className='postInfo'>
          <img className='postInfo__photo' src={testPhoto} alt='Post' />
          <BackwardsButton />
          <WeatherInfo />
          <div className='postInfo__title'>
            <h1>Costa del Este</h1>
            <h2>Average Price: $24</h2>
          </div>
          <div className='postInfo__creator'>
            <UserPhoto testProfilePhoto={photo1} isVerified />
            <p className='postInfo__creator--name'>Created by Jose</p>
          </div>
          <div className='postInfo__contributors'>
            <div className='postInfo__contributors--profiles'>
              <UserPhoto firstPhoto testProfilePhoto={photo4} />
              <UserPhoto secondPhoto testProfilePhoto={photo2} />
              <UserPhoto thirdPhoto testProfilePhoto={photo3} />
              <UserPhoto testProfilePhoto={photo1} />
            </div>
            <p className='postInfo__contributors--names'>Commented by Agustín, Jonathan + 5 more </p>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    hola: state.hola,
  };
};

export default connect(mapStateToProps, null)(PostInfo);
