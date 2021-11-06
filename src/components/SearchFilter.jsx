/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
//styles
import '../assets/styles/Components/SearchFilter.styl';
//FontAwersome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function SearchFilter(props) {
  const { handleFilterdisplay } = props;
  console.log(handleFilterdisplay);
  return (
    <div className='searchBar-container' onClick={handleFilterdisplay}>
      <span className='Placeholder'>Search Filter</span>
      <FontAwesomeIcon icon={faSearch} className='search-icon' />
    </div>
  );
};
