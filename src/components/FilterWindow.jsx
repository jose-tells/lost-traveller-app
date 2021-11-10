import React from 'react';
// Redux
import { connect } from 'react-redux';
// Classnames
import classNames from 'classnames';
// Components
import FilterWindowItem from './FilterWindowItem';
//styles
import '../assets/styles/Components/FilterWindow.styl';

const FilterWindow = (props) => {
  const { openFilter, rankings, setOpenFilter } = props;

  const filterWindowStyles = classNames('filterWindow__container', {
    openFilter,
  });

  return (
    <div className={filterWindowStyles}>
      {
        rankings.map((ranking) => (
          <FilterWindowItem
            key={ranking.rankId}
            rankId={ranking.rankId}
            rankEmoji={ranking.rankEmoji}
            rankName={ranking.rankName}
            setOpenFilter={setOpenFilter}
          />
        ))
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    rankings: state.rankings,
  };
};

export default connect(mapStateToProps, null)(FilterWindow);

