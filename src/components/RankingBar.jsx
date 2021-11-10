import React from 'react';
// Classnames
import classNames from 'classnames';

const RankingBar = (props) => {
  const { rankEmoji, rankName, isRating, rankStatus } = props;

  const rankingBar = classNames('rankingBar__bar', {
    isRating,
  });

  return (
    <div className='rankingBar__container'>
      <img className='rankingBar__emoji' src={rankEmoji} alt={rankName} />
      <p className='rankingBar__title'>{rankName}</p>
      <div className={rankingBar}>
        <div className='rankingBar__bar--percentage' />
      </div>
      <span className='rankingBar__bar--rankStatus'>{rankStatus}</span>
    </div>
  );
};

export default RankingBar;
