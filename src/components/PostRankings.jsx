import React from 'react';
//redux
import { connect } from 'react-redux';
// import addRanking from '../actions/index';
// Components
import RankItem from './RankItem';
import RankingBar from './RankingBar';

const PostRankings = (props) => {
  const { post, addRankings } = props;
  console.log(Object.values(addRankings));
  // const HotelEmoji = 'https://img.icons8.com/emoji/48/000000/hotel-emoji.png';

  return (
    <>
      <div className='postRankings__container'>
        <div className='postRankings__flex'>
          {post.rankings.map((rank) => (
            <RankItem
              addRankings={addRankings}
              key={rank.rankId}
              rankId={rank.rankId}
              rankEmoji={rank.rankEmoji}
              rankName={rank.rankName}
              rankStatus={rank.rankStatus}
            />
          ))}
        </div>
      </div>
      { Object.keys(addRankings).length > 0 && (
        <RankingBar
          rankEmoji={addRankings.rankEmoji}
          rankName={addRankings.rankName}
          rankStatus={addRankings.rankStatus}
        />
      )}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    addRankings: state.post.addRankings,
  };
};
export default connect(mapStateToProps, null)(PostRankings);

