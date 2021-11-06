import React from 'react';

const PhotoLayout = (props) => {
  const { media, metadata } = props;

  return (
    <div className='usersPhotoGrid__photoContainer'>
      <img className='usersPhotoGrid__photoContainer--photo' src={media} alt={metadata} />
    </div>
  );
};

export default PhotoLayout;
