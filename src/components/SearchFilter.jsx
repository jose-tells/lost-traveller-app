import React from 'react';
//FontAwersome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function SearchFilter(props) {
  const { handleFilterDisplay } = props;

  return (
    <div className='searchBar__container'>
      <input className='searchBar__input' placeholder='Search by filter' />
      <FontAwesomeIcon
        icon={faSearch}
        className='searchBar__icon'
        onClick={handleFilterDisplay}
      />
    </div>
  );
};
