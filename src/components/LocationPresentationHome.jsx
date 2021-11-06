import React, { useState } from 'react';
//components
import SearchFilter from './SearchFilter';
import GridPlaces from './GridPlaces';
import FilterWindow from './FilterWindow';

export default function LocationPresentaionHome() {
  const [openFilter, setOpenFilter] = useState(false);
  const handleFilterdisplay = () => {
    setOpenFilter(!openFilter);
    console.log(openFilter);
  };
  return (
    <div className='location-container'>
      <h1 className='title'>
        The Lost Locations
      </h1>
      <SearchFilter openFilter={openFilter} handleFilterdisplay={handleFilterdisplay} />
      <FilterWindow openFilter={openFilter} handleFilterdisplay={handleFilterdisplay} />
      <GridPlaces />
    </div>
  );
};
