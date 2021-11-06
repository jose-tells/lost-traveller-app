import React from 'react';
// Components
import RankItem from './RankItem';
import RankingBar from './RankingBar';

const PostRankings = (props) => {
  const { post } = props;

  const HotelEmoji = 'https://img.icons8.com/emoji/48/000000/hotel-emoji.png';

  return (
    <>
      <div className='postRankings__container'>
        <div className='postRankings__flex'>
          {post.rankings.map((rank) => (
            <RankItem
              key={rank.rankId}
              emojiItem={rank.rankEmoji}
              altText={rank.rankName}
            />
          ))}
        </div>
      </div>
      <RankingBar
        emojiItem={HotelEmoji}
        altText='Hotel'
        rankTitle='Hotels'
        rankStatus='zzz'
      />
    </>
  );
};

export default PostRankings;
