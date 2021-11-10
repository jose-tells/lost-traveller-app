import React from 'react';
// Components
import HomePresentation from '../components/HomePresentation';
import LocationPresentationHome from '../components/LocationPresentationHome';
import Footer from '../components/Footer';
// Styles
import '../assets/styles/Home.styl';

const Home = () => {
  return (
    <>
      <HomePresentation />
      <LocationPresentationHome />
      <Footer />
    </>
  );
};

export default Home;
