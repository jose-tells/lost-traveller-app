import React from 'react';
import { connect } from 'react-redux';
import addingRanking from '../actions';

const RankItem = (props) => {
  const { rankEmoji, rankName, rankId, rankStatus, addingRanking } = props;
  const handleAddingRanking = () => {
    addingRanking({ rankId, rankName, rankEmoji, rankStatus });
  };
  return (
    <button type='button' className='postRanking__item' onClick={handleAddingRanking}>
      <img src={rankEmoji} alt={rankName} />
    </button>
  );
};
const mapDispatchToProps = {
  addingRanking,
};
export default connect(null, mapDispatchToProps)(RankItem);
