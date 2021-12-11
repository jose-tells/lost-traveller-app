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
      addRanking({ rankId, rankEmoji, rankStatus });
  };

  const handleClick = () => {
    removeFilterRank(rankId);
  };

  return (
    <button type='button' className='postRanking__item' onClick={isFilter ? handleClick : handleAddingRanking}>
      {isFilter && (
        <div className='postRanking__close--container'>
          <h1 className='postRanking__item--close'>
            X
          </h1>
        </div>
      )}
      <img className='postRanking__item--emoji' src={rankEmoji[0]} alt={rankEmoji[1]} />
    </button>
  );
};

const mapDispatchToProps = {
  addRanking,
  addRating,
  removeFilterRank,
};
export default connect(null, mapDispatchToProps)(RankItem);
