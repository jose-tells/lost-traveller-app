import React from 'react';
import '../assets/styles/Loader.styl';

const Loader = () => {
  return (
    <div className='loader__container'>
      <div className='lds-ring'>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};
export default Loader;
