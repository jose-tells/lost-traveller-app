import React, { useState } from 'react';
// Classnames
import classNames from 'classnames';
// React-redux
import { connect } from 'react-redux';
import { createPostRanking } from '../actions';
// Hooks
import useFinder from '../Hooks/useFinder';
import FilteredPostRankings from './FilteredPostRankings';

const SetRankings = (props) => {

  const { rankings, postRankings, createPostRanking, postId, user } = props;

  const [rankList, showRankList] = useState(false);
  const { query, setQuery, filteredState } = useFinder(rankings);

  const listContainerStyles = classNames('inputRankings__list--container', {
    rankList,
  });

  const handleClick = (rank) => {
    const { rankId, rankName, rankEmoji } = rank;
    const { id: userId, username } = user;

    const rankValidation = postRankings.some((postRank) => postRank.rankId === rankId);
    if (!rankValidation) {
      createPostRanking({
        rankId,
        postId,
        rankStatus: 0,
        rankEmoji: [rankEmoji, rankName],
        userCreator: {
          userId,
          username,
        },
      });
    }
    showRankList(false);
  };

  return (
    <section className='inputRankings__container'>
      <h2 className='inputRankings__title'>
        Selecciona rankings para valorar tu destino!
      </h2>
      <form className='inputRankings__form'>
        <input
          className='inputRankings__form--input'
          type='text'
          id='rankings'
          placeholder='Selecciona el ranking'
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            e.target.value ? showRankList(true) : showRankList(false);
          }}
        />
      </form>
      <div className={listContainerStyles}>
        <ul className='inputRankings__list--itemContainer'>
          {filteredState.length > 0 ? (
            filteredState.map((rank) => (
              <FilteredPostRankings
                key={rank.rankId}
                rank={rank}
                handleClick={handleClick}
                postRankings={postRankings}
              />
            ))
          ) : <p className='inputRankings__list--text'>No se encontraron rankings</p>}
        </ul>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    rankings: state.rankings,
    postRankings: state.post.rankings,
  };
};

const mapDispatchToProps = {
  createPostRanking,
};

export default connect(mapStateToProps, mapDispatchToProps)(SetRankings);
