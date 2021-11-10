import React from 'react';
//redux
import { connect } from 'react-redux';
// Components
import RankingBar from './RankingBar';
import RankItem from './RankItem';

const PostRankings = (props) => {
  const { addRankings } = props;

  return (
    <>
      <div className='postRankings__container'>
        <div className='postRankings__flex'>
          {postRankings.map((rank) => (
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

