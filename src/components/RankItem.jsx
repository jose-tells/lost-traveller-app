/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
// Redux
import { connect } from 'react-redux';
// Actions
import { removeFilterRank } from '../actions';

const RankItem = (props) => {
  const { emojiItem, altText, rankId, removeFilterRank, isFilter } = props;

  const handleClick = () => {
    removeFilterRank(rankId);
  };

  return (
    <div className='postRanking__item' onClick={handleClick}>
      {isFilter && <div className='postRanking__item--close'>x</div>}
      <img className='postRanking__item--emoji' src={emojiItem} alt={altText} />
    </div>
  );
};

const mapDispatchToProps = {
  removeFilterRank,
};

export default connect(null, mapDispatchToProps)(RankItem);
