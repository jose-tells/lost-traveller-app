import React from 'react';

const RankItem = (props) => {
  const { emojiItem, altText } = props;

  return (
    <div className='postRanking__item'>
      <img src={emojiItem} alt={altText} />
    </div>
  );
};

export default RankItem;
