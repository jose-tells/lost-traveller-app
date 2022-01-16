/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
// Redux
import { connect } from 'react-redux';
// Actions
import { addRanking, addRating, removeFilterRank } from '../actions';

const RankItem = (props) => {
  const {
    rankId,
    rankEmoji,
    rankName,
    rankStatus,
    addRanking,
    addRating,
    removeFilterRank,
    isFilter,
    isRating,
  } = props;

  const handleAddingRanking = () => {
    isRating ?
      addRating({ rankName, rankEmoji }) :
      addRanking({ rankId, rankName, rankEmoji, rankStatus });
  };

  const handleClick = () => {
    removeFilterRank(rankId);
  };

  return (
    <button type='button' className='postRanking__item' onClick={isFilter ? handleClick : handleAddingRanking}>
      <img className='postRanking__item--emoji' src={rankEmoji} alt={rankName} />
    </button>
  );
};

const mapDispatchToProps = {
  addRanking,
  addRating,
  removeFilterRank,
};
export default connect(null, mapDispatchToProps)(RankItem);
