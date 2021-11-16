import React, { useEffect, useState } from 'react';
// Components
import HomePresentation from '../components/HomePresentation';
import LocationPresentationHome from '../components/LocationPresentationHome';
import Footer from '../components/Footer';
// Styles
import '../assets/styles/Home.styl';
import SuccessSubmit from '../components/SuccessSubmit';

const Home = (props) => {
  const { location } = props;
  const [showSuccess, hideSuccess] = useState(location.state && location.state.uploaded);

  useEffect(() => {
    setTimeout(() => {
      hideSuccess(false);
    }, 2800);
    return () => hideSuccess(false);
  }, []);

  return (
    <>
      {showSuccess && <SuccessSubmit />}
      <HomePresentation />
      <LocationPresentationHome />
      <Footer />
    </>
  );
};

export default Home;
