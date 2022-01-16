import React from 'react';

const FilterWindowItem = (props) => {
  const { addFilterRank, rankId, rankEmoji, rankName, setOpenFilter } = props;

  const handleClick = () => {
    addFilterRank({ rankId, rankName, rankEmoji });
    setOpenFilter(false);
  };

  return (
    <button
      type='button'
      className='filterWindow__item--container'
      onClick={handleClick}
    >
      <img
        className='filterWindow__item--emoji'
        src={rankEmoji}
        alt={rankName}
      />
      {rankName}
    </button>
  );
};

export default FilterWindowItem;
