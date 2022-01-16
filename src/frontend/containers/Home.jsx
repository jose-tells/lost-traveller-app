import React, { useState } from 'react';
// React-router-dom
import { Link } from 'react-router-dom';
// React-redux
import { connect } from 'react-redux';
// Actions
import { addFilterRank } from '../actions';
// Components
import LocationPresentationHome from '../components/LocationPresentationHome';
import Footer from '../components/Footer';
// import SuccessSubmit from '../components/SuccessSubmit';
import MenuNav from '../components/MenuNav';
import IntroductionTitle from '../components/IntroductionTitle';
import FilterWindow from '../components/FilterWindow';
import FilterWindowItem from '../components/FilterWindowItem';
import RankItem from '../components/RankItem';
import LocationItem from '../components/LocationItem';
import GridLocations from '../components/GridLocations';
// Media
import Wallpaper from '../assets/img/sanBlassV.jpg';
// Styles
import '../assets/styles/Home.styl';

const Home = ({ user, posts, filterRanks, rankings, addFilterRank }) => {

  const hasUser = Boolean(user.id);

  // const [showSuccess, hideSuccess] = useState(location.state && location.state.uploaded);
  const [openFilter, setOpenFilter] = useState(false);

  const handleFilterDisplay = () => {
    setOpenFilter(!openFilter);
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     hideSuccess(false);
  //   }, 2800);
  //   return () => {
  //     hideSuccess(false);
  //   };
  // }, []);

  return (
    <>
      {/* {showSuccess && <SuccessSubmit />} */}
      <header className='homePresentation__container'>
        <img src={Wallpaper} className='homePresentation__wallpaper' alt='background' />
        <MenuNav hasUser={hasUser} />
        <IntroductionTitle />
        {!hasUser && (
          <button type='button' className='homePresentation__signInContainer'>
            <Link to='/signIn' className='homePresentation__singInBtn'>Log In</Link>
          </button>
        )}
      </header>
      <LocationPresentationHome handleFilterDisplay={handleFilterDisplay}>
        <FilterWindow openFilter={openFilter}>
          {rankings.map((ranking) => (
            <FilterWindowItem
              key={ranking.rankId}
              rankId={ranking.rankId}
              rankEmoji={ranking.rankEmoji}
              rankName={ranking.rankName}
              setOpenFilter={setOpenFilter}
              addFilterRank={addFilterRank}
            />
          ))}
        </FilterWindow>
        {filterRanks.length > 0 && (
          <div className='filtersAdded__container'>
            {filterRanks.map((filterRank) => (
              <RankItem
                key={filterRank.rankId}
                rankId={filterRank.rankId}
                rankName={filterRank.rankName}
                rankEmoji={filterRank.rankEmoji}
                isFilter
              />
            ))}
          </div>
        )}
        <GridLocations>
          {
            posts.map((post) => (
              <LocationItem
                key={post.id}
                postId={post.id}
                postName={post.title}
                postProvince={post.province}
                postCommentsLength={post.comments.length}
                postPhoto={post.photo}
              />
            ))
          }
        </GridLocations>
      </LocationPresentationHome>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    posts: state.posts,
    rankings: state.rankings,
    filterRanks: state.filterRanks,
  };
};

const mapDispatchToProps = {
  addFilterRank,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
