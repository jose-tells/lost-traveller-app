import React, { useState } from 'react';
// Classnames
import classNames from 'classnames';

const RankingBar = (props) => {
  const { rankEmoji, rankName, isRating, rankStatus, style } = props;
  const [valuePercentage, setValuePercentage] = useState(1);
  const rankingBar = classNames('rankingBar__bar', {
    isRating,
  });
  const handlePercentageInput = (event) => {
    const slider = document.getElementById('slider');
    setValuePercentage(event.target.value);
    const color = `linear-gradient(90deg, #F28A55 ${valuePercentage}% , #c2c2c2 ${valuePercentage}%)`;
    slider.style.background = color;
  };
  return (
    <div className='rankingBar__container' style={style}>
      <img className='rankingBar__emoji' src={rankEmoji} alt={rankName} />
      <p className='rankingBar__title'>{rankName}</p>
      <div className={rankingBar}>
        {
          isRating ? (
            <>
              <input
                type='range'
                id='slider'
                min='1'
                max='100'
                value={valuePercentage}
                onChange={handlePercentageInput}
                className='rankingBar__bar range'
              />
              <div className='modal--percentage' style={{ transform: `translateX(calc(1.8*${valuePercentage}q))` }}>
                {valuePercentage}
              </div>
            </>
          ) :
            <div className='rankingBar__bar--percentage' />
        }
      </div>
      <span className='rankingBar__bar--rankStatus'>{rankStatus}</span>
    </div>
  );
};
export default RankingBar;
