import React from 'react';
// Components
import RankItem from './RankItem';
import RankingBar from './RankingBar';

const PostRankings = () => {
  const HotelEmoji = 'https://img.icons8.com/emoji/48/000000/hotel-emoji.png';

  return (
    <>
      <div className='postRankings__container'>
        <RankItem emojiItem='https://img.icons8.com/emoji/48/000000/woman-police-officer.png' altText='Security' />
        <RankItem emojiItem='https://img.icons8.com/emoji/48/000000/beach-with-umbrella.png' altText='Security' />
        <RankItem emojiItem='https://img.icons8.com/emoji/48/000000/mountain-emoji.png' altText='Security' />
        <RankItem emojiItem='https://img.icons8.com/emoji/48/000000/camping.png' altText='Security' />
        <RankItem emojiItem={HotelEmoji} altText='Security' />
        <RankItem emojiItem='https://img.icons8.com/emoji/48/000000/motorway.png' altText='Accessibility' />
        <RankItem emojiItem='https://img.icons8.com/emoji/48/000000/sun-behind-cloud.png' altText='Sunny' />
        <RankItem emojiItem='https://img.icons8.com/emoji/48/000000/top-arrow-emoj.png' altText='Top Place' />
        <RankItem emojiItem='https://img.icons8.com/emoji/48/000000/money-mouth-face.png' altText='Security' />
        <RankItem emojiItem='https://img.icons8.com/emoji/48/000000/wastebasket-emoji.png' altText='Security' />
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
