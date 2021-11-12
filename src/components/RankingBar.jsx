import React, { useState } from 'react';
// Redux
import { connect } from 'react-redux';
// Classnames
import classNames from 'classnames';
// Actions
import { removeRanking } from '../actions';

const RankingBar = (props) => {
  const { rankEmoji, rankName, isRating, rankStatus, removeRanking } = props;
 
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
  

  const rankingBar = classNames('rankingBar__bar', {
    isRating,
  });

  const isBad = rankStatus >= 0 && rankStatus < 35;
  const isGood = rankStatus >= 35 && rankStatus < 75;
  // const isExcellent = rankStatus >= 75 && rankStatus <= 100;

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

  return (
    <div className='rankingBar__container' onClick={() => removeRanking({})}>
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
          ) : <div className='rankingBar__bar--percentage' style={percentageBarStyles()} />
        }
      </div>
      <span className='rankingBar__bar--rankStatus' style={letterColorByPercentage()}>
        {isBad ? 'Bad' : isGood ? 'Good' : 'Excellent'}
      </span>
    </div>
  );
};

const mapDispatchToProps = {
  removeRanking,
};

export default connect(null, mapDispatchToProps)(RankingBar);
