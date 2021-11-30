import React, { useState } from 'react';
// Redux
import { connect } from 'react-redux';
//FontAwersome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
// Components
import FilterWindow from './FilterWindow';
import FilterWindowItem from './FilterWindowItem';
import RankItem from './RankItem';
import GridLocations from './GridLocations';
import LocationItem from './LocationItem';
// Media
import sanBlas from '../assets/img/san-BlasH.jpg';

const LocationPresentationHome = (props) => {
  const { posts, filterRanks, rankings } = props;

  const [openFilter, setOpenFilter] = useState(false);

  const handleFilterDisplay = () => {
    setOpenFilter(!openFilter);
  };

  return (
    <main className='lostLocations__container' id='places'>
      <div className='lostLocations__title--container'>
        <h1 className='lostLocations__title'>
          The Lost Locations
        </h1>
      </div>
      <div className='searchBar__container'>
        <input className='searchBar__input' placeholder='Search by filter' />
        <FontAwesomeIcon
          icon={faSearch}
          className='searchBar__icon'
          onClick={handleFilterDisplay}
        />
      </div>
      <FilterWindow openFilter={openFilter}>
        {rankings.map((ranking) => (
          <FilterWindowItem
            key={ranking.rankId}
            rankId={ranking.rankId}
            rankEmoji={ranking.rankEmoji}
            rankName={ranking.rankName}
            setOpenFilter={setOpenFilter}
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
              postName={post.name}
              postProvince={post.province}
              postCommentsLength={post.comments.length}
              postPhoto={post.photo || sanBlas}
            />
          ))
        }
      </GridLocations>
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    rankings: state.rankings,
    filterRanks: state.filterRanks,
  };
};

export default connect(mapStateToProps, null)(LocationPresentationHome);
