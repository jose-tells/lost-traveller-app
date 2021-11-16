import React from 'react';
//redux
import { connect } from 'react-redux';
// Components
import RankItem from './RankItem';
import RankingBar from './RankingBar';

const UserRatingSystem = (props) => {
  const { postRankings, addRankings } = props;

  const hasRanking = Object.keys(addRankings).length > 0;

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
      {hasRanking && (
        <RankingBar
          rankName={addRankings.rankName}
          rankEmoji={addRankings.rankEmoji}
          rankStatus={addRankings.rankStatus}
          isRating
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
export default connect(mapStateToProps, null)(UserRatingSystem);
