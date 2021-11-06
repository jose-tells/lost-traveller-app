import React from 'react';
import { Link } from 'react-router-dom';
//custom-hooks
import useDisplay from '../Hooks/useDisplay';
// Components
import LocationPresentationHome from '../components/LocationPresentationHome';
import Footer from '../components/Footer';
import HomeTemplate from '../components/HomeTemplate';
import MenuNav from '../components/MenuNav';
import SlideMenuBar from '../components/SlideMenuBar';
// Styles
import '../assets/styles/Home.styl';

const Home = () => {
  const { open, handle } = useDisplay();
  return (
    <>
      <div className='index_presentation-container'>
        <MenuNav open={open} handleDisplayMenu={handle} />
        <div>
          <SlideMenuBar open={open} handleDisplayMenu={handle} />
        </div>
        <HomeTemplate open={open} handleDisplayMenu={handle} />
        <div className='button-container'>
          <Link to='/signUp' className='singUp-btn'>Sign In</Link>
        </div>
      </div>
      <div className='grid-locations-container'>
        <LocationPresentationHome />
      </div>
      <Footer />
    </>
  );
};

export default Home;
