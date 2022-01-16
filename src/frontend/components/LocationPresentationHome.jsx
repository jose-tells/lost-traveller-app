import React from 'react';
//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const LocationPresentationHome = ({ children, handleFilterDisplay }) => {

  return (
    <main className='lostLocations__container' id='places'>
      <div className='lostLocations__title--container'>
        <h1 className='lostLocations__title'>
          The Lost Places
        </h1>
      </div>
      <div className='searchBar__container'>
        <input
          className='searchBar__input'
          placeholder='Search by filter'
          disabled
        />
        <FontAwesomeIcon
          icon={faSearch}
          className='searchBar__icon'
          onClick={handleFilterDisplay}
        />
      </div>
      {children}
    </main>
  );
};

export default LocationPresentationHome;
