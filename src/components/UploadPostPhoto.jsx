/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const UploadPostPhoto = () => {
  return (
    <header className='uploadPostPhoto__container'>
      <div className='uploadPostPhoto__photo'>
        <form className='uploadPostPhoto__form'>
          <input
            className='uploadPostPhoto__form--input'
            id='img'
            name='img'
            accept='image/*'
            type='file'
            alt='Image'
          />
          <label htmlFor='img'>Choose an Image</label>
        </form>
      </div>
    </header>
  );
};

export default UploadPostPhoto;
