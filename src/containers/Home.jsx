import React from 'react';
<<<<<<< HEAD
=======
import { Link } from 'react-router-dom';
//custom-hooks
import useDisplay from '../Hooks/useDisplay';
>>>>>>> 656a579dd6065d0ea6e0ddba8b5f8de052cea6b5
// Components
import HomePresentation from '../components/HomePresentation';
import LocationPresentationHome from '../components/LocationPresentationHome';
import Footer from '../components/Footer';
// Styles
import '../assets/styles/Home.styl';

const Home = () => {
<<<<<<< HEAD
  return (
    <>
      <HomePresentation />
      <LocationPresentationHome />
=======
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
          <Link to='/signIn' className='singUp-btn'>Sign In</Link>
        </div>
      </div>
      <div className='grid-locations-container'>
        <LocationPresentationHome />
      </div>
>>>>>>> 656a579dd6065d0ea6e0ddba8b5f8de052cea6b5
      <Footer />
    </>
  );
};

export default Home;
