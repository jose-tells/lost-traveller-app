/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
// Redux
import { connect } from 'react-redux';
// Actions
import { addingRanking, removeFilterRank } from '../actions';

const RankItem = (props) => {
  const { rankEmoji, rankName, rankId, rankStatus, addingRanking, removeFilterRank, isFilter } = props;
  const handleAddingRanking = () => {
    addingRanking({ rankId, rankName, rankEmoji, rankStatus });
  };

  const handleClick = () => {
    removeFilterRank(rankId);
  };

  return (
    <button type='button' className='postRanking__item' onClick={isFilter ? handleClick : handleAddingRanking}>
      {isFilter && <div className='postRanking__item--close'>x</div>}
      <img className='postRanking__item--emoji' src={rankEmoji} alt={rankName} />
    </button>
  );
};

const mapDispatchToProps = {
  addingRanking,
  removeFilterRank,
};
export default connect(null, mapDispatchToProps)(RankItem);
