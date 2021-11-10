/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
// Redux
import { connect } from 'react-redux';
// Actions
import { addFilterRank } from '../actions';

const FilterWindowItem = (props) => {
  const { addFilterRank, rankId, rankEmoji, rankName, setOpenFilter } = props;

  const handleClick = () => {
    addFilterRank({ rankId, rankName, rankEmoji });
    setOpenFilter(false);
  };

  return (
    <div className='filterWindow__item--container' onClick={handleClick}>
      <img className='filterWindow__item--emoji' src={rankEmoji} alt={rankName} />
      <p className='filterWindow__item--text'>{rankName}</p>
    </div>
  );
};

const mapDispatchToProps = {
  addFilterRank,
};

export default connect(null, mapDispatchToProps)(FilterWindowItem);
