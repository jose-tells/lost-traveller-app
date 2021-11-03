import React from 'react';
// Components
import PhotoLayout from './PhotoLayout';

const UserPhotosGrid = () => {
  return (
    <>
      <section className='userPhotosGrid__container'>
        <PhotoLayout />
        <PhotoLayout />
        <PhotoLayout />
        <PhotoLayout />
      </section>
    </>
  );
};

export default UserPhotosGrid;
