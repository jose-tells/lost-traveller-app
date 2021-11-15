import React from 'react';
// Components
import PhotoLayout from './PhotoLayout';

const UserPhotosGrid = (props) => {
  const { userPhotos } = props;

  return (
    <>
      <section id='photos' className='userPhotosGrid__container'>
        {
          userPhotos.map((photo) => (
            <PhotoLayout
              key={photo.id}
              media={photo.media}
              metadata={photo.metadata}
            />
          ))
        }
      </section>
    </>
  );
};

export default UserPhotosGrid;
