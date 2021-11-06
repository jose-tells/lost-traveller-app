import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Components
import LocationPresentationHome from '../components/LocationPresentationHome';
import Footer from '../components/Footer';
import HomeTemplate from '../components/HomeTemplate';
import MenuNav from '../components/MenuNav';
import SlideMenuBar from '../components/SlideMenuBar';
// Styles
import '../assets/styles/Home.styl';

const Home = () => {
  const [open, setOpen] = useState(false);

  const handleDisplayMenu = () => {
    setOpen(!open);
    console.log(open);
  };
  return (
    <>
      <div className='index_presentation-container'>
        <MenuNav open={open} handleDisplayMenu={handleDisplayMenu} />
        <div>
          <SlideMenuBar open={open} handleDisplayMenu={handleDisplayMenu} />
        </div>
        <HomeTemplate open={open} handleDisplayMenu={handleDisplayMenu} />
        <div className='button-container'>
          <Link to='/signIn' className='singUp-btn'>Sign In</Link>
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
