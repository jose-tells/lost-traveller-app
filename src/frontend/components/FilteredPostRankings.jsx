import classNames from 'classnames';
import React from 'react';

const FilteredPostRankings = ({ postRankings, rank, handleClick }) => {

  const isDisabled = postRankings.some((postRanking) => postRanking.rankId === rank.rankId);

  const itemRankingsStyles = classNames('inputRankings__list--item', {
    isDisabled,
  });

  return (
    <li className={itemRankingsStyles} onClick={() => { handleClick(rank); }}>
      {rank.rankName}
    </li>
  );
};

export default FilteredPostRankings;
