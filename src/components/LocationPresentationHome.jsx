import React, { useState } from 'react';
// Redux
import { connect } from 'react-redux';
// Components
import SearchFilter from './SearchFilter';
import FilterWindow from './FilterWindow';
import RankItem from './RankItem';
import GridLocations from './GridLocations';

const LocationPresentationHome = (props) => {
  const { posts, filterRanks } = props;

  const [openFilter, setOpenFilter] = useState(false);

  const handleFilterDisplay = () => {
    setOpenFilter(!openFilter);
  };

  return (
    <main className='lostLocations__container'>
      <div className='lostLocations__title--container'>
        <h1 className='lostLocations__title'>
          The Lost Locations
        </h1>
      </div>
      <SearchFilter handleFilterDisplay={handleFilterDisplay} />
      <FilterWindow
        handleFilterDisplay={handleFilterDisplay}
        openFilter={openFilter}
        setOpenFilter={setOpenFilter}
      />
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
      <GridLocations posts={posts} />
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    filterRanks: state.filterRanks,
  };
};

export default connect(mapStateToProps, null)(LocationPresentationHome);
