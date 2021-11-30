import React, { useEffect, useState } from 'react';
// React-router-dom
import { Link } from 'react-router-dom';
// React-redux
import { connect } from 'react-redux';
// Components
import LocationPresentationHome from '../components/LocationPresentationHome';
import Footer from '../components/Footer';
import SuccessSubmit from '../components/SuccessSubmit';
import MenuNav from '../components/MenuNav';
import IntroductionTitle from '../components/IntroductionTitle';
// Styles
import '../assets/styles/Home.styl';
// Media
import Wallpaper from '../assets/img/sanBlassV.jpg';

const Home = (props) => {
  const { location, user } = props;
  const [showSuccess, hideSuccess] = useState(location.state && location.state.uploaded);

  const hasUser = Object.values(user).length > 0;

  useEffect(() => {
    setTimeout(() => {
      hideSuccess(false);
    }, 2800);
    return () => hideSuccess(false);
  }, []);

  return (
    <>
      {showSuccess && <SuccessSubmit />}
      <header className='homePresentation__container'>
        <img src={Wallpaper} className='homePresentation__wallpaper' alt='background' />
        <MenuNav hasUser={hasUser} />
        <IntroductionTitle />
        {!hasUser && (
          <button type='button' className='homePresentation__signInContainer'>
            <Link to='/signIn' className='homePresentation__singInBtn'>Sign In</Link>
          </button>
        )}
      </header>
      <LocationPresentationHome />
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(Home);
