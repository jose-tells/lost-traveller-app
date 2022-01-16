/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
// Classnames
import classNames from 'classnames';
// Actions

const RankingBar = (props) => {
  const { rankEmoji, rankName, rankStatus, removeRanking, isRating } = props;

  const isBad = rankStatus >= 0 && rankStatus < 35;
  const isGood = rankStatus >= 35 && rankStatus < 75;
  // const isExcellent = rankStatus >= 75 && rankStatus <= 100;

  const [valuePercentage, setValuePercentage] = useState(0);

  const isDynamicBad = valuePercentage >= 0 && valuePercentage < 35;
  const isDynamicGood = valuePercentage >= 35 && valuePercentage < 75;

  const rankingBar = classNames('rankingBar__bar', {
    isRating,
  });

  const background = isDynamicBad ? '#59473E' : isDynamicGood ? '#EB6B2A' : '#00998F';

  const handlePercentageInput = (event) => {
    const slider = document.getElementById('slider');
    setValuePercentage(event.target.value);
    const color = `linear-gradient(90deg, ${background} ${valuePercentage}% , #c2c2c2 ${valuePercentage}%)`;
    slider.style.background = color;
  };

  const percentageBarStyles = () => {
    return {
      width: `${rankStatus}%`,
      background: isBad ? '#59473E' : isGood ? '#EB6B2A' : '#00998F',
    };
  };

  const letterColorByPercentage = () => {
    return {
      color: isBad ? '#59473E' : isGood ? '#EB6B2A' : '#00998F',
    };
  };

  const letterRatingColorByPercentage = () => {
    return {
      color: isDynamicBad ? '#59473E' : isDynamicGood ? '#EB6B2A' : '#00998F',
    };
  };

  return (
    <div className='rankingBar__container' onClick={() => removeRanking({})}>
      <img className='rankingBar__emoji' src={rankEmoji} alt={rankName} />
      <p className='rankingBar__title'>{rankName}</p>
      <div className={rankingBar}>
        {
          isRating ? (
            <>
              <div
                className='modal--percentage'
                style={
                  {
                    transform: `translate(calc(1.8*${valuePercentage}q), -18px)`,
                    background,
                  }
                }
              >
                {valuePercentage}
              </div>
              <input
                type='range'
                id='slider'
                min='1'
                max='100'
                value={valuePercentage}
                onChange={handlePercentageInput}
                className='rankingBar__bar range'
              />
            </>
          ) : <div className='rankingBar__bar--percentage' style={percentageBarStyles()} />
        }
      </div>
      {
        isRating ? (
          <span className='rankingBar__bar--rankStatus' style={letterRatingColorByPercentage()}>
            {isDynamicBad ? 'Bad' : isDynamicGood ? 'Good' : 'Excellent'}
          </span>
        ) : (
          <span className='rankingBar__bar--rankStatus' style={letterColorByPercentage()}>
            {isBad ? 'Bad' : isGood ? 'Good' : 'Excellent'}
          </span>
        )
      }
    </div>
  );
};

export default RankingBar;
