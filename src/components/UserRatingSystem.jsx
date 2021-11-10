import React from 'react';
// Components
import RankItem from './RankItem';
import RankingBar from './RankingBar';

const UserRatingSystem = (props) => {
  const { postRankings } = props;

  const HotelEmoji = 'https://img.icons8.com/emoji/48/000000/hotel-emoji.png';

  return (
    <>
      <h1 className='postUserRatingSystem__title'>With your experience, how would you rate this place?</h1>
      <div className='postRankings__container'>
        <div className='postRankings__flex'>
          {postRankings.map((rank) => (
            <RankItem
              key={rank.rankId}
              rankEmoji={rank.rankEmoji}
              rankName={rank.rankName}
            />
          ))}
        </div>
      </div>
      <RankingBar
        emojiItem={HotelEmoji}
        rankName='Hotel'
        rankStatus={20}
        isRating
        rankTitle='Hotels'
      />
    </>
  );
};

export default UserRatingSystem;
