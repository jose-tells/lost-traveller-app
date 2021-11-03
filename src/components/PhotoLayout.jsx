import React from 'react';
// Media
import photo1 from '../assets/img/Costa-del-Este-PS-edit.jpg';

const PhotoLayout = () => {
  return (
    <div className='usersPhotoGrid__photoContainer'>
      <img className='usersPhotoGrid__photoContainer--photo' src={photo1} alt='' />
    </div>
  );
};

export default PhotoLayout;
