/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
// Redux
import { connect } from 'react-redux';
// Actions
import { addingRanking, removeFilterRank } from '../actions';

const RankItem = (props) => {
  const { rankEmoji, rankName, rankId, rankStatus, addingRanking } = props;
  const handleAddingRanking = () => {
    removeFilterRank(rankId);
    addingRanking({ rankId, rankName, rankEmoji, rankStatus });
  };
  return (
    <button type='button' className='postRanking__ite' onClick={handleAddingRanking}>
      {isFilter && <div className='postRanking__item--close'>x</div>}
      <img src={rankEmoji} alt={rankName} />
    </button>
  );
};
const mapDispatchToProps = {
  addingRanking,
  removeFilterRank,
};
export default connect(null, mapDispatchToProps)(RankItem);
