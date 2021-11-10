/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
// Redux
import { connect } from 'react-redux';
// Actions
import { addFilterRank } from '../actions';

const FilterWindowItem = (props) => {
  const { addFilterRank, rankId, rankEmoji, rankAlt, rankDescription, setOpenFilter } = props;

  const handleClick = () => {
    addFilterRank({ rankId, rankAlt, rankEmoji });
    setOpenFilter(false);
  };

  return (
    <div className='filterWindow__item--container' onClick={handleClick}>
      <img className='filterWindow__item--emoji' src={rankEmoji} alt={rankAlt} />
      <p className='filterWindow__item--text'>{rankDescription}</p>
    </div>
  );
};

const mapDispatchToProps = {
  addFilterRank,
};

export default connect(null, mapDispatchToProps)(FilterWindowItem);
