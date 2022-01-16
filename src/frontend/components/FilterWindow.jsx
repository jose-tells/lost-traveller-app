import React from 'react';
// Classnames
import classNames from 'classnames';
//styles
import '../assets/styles/components/FilterWindow.styl';

const FilterWindow = ({ children, openFilter }) => {

  const filterWindowStyles = classNames('filterWindow__container', {
    openFilter,
  });

  return (
    <div className={filterWindowStyles}>
      {children}
    </div>
  );
};

export default FilterWindow;

