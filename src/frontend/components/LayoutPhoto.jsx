import React from 'react';

const LayoutPhoto = ({ photo, photoName }) => {
  return (
    <img className='postInfo__photo' src={photo} alt={photoName} />
  );
};

export default LayoutPhoto;
