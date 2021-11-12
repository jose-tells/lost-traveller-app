/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

const UploadPostPhoto = () => {
  const [filename, setFilename] = useState('Choose an Image');
  const [fileUrl, setFileUrl] = useState('');

  const handleChange = (event) => {
    const url = URL.createObjectURL(event.target.files[0]);
    setFileUrl(url);
    setFilename(event.target.files[0].name);
  };

  return (
    <header className='uploadPostPhoto__container'>
      <div className='uploadPostPhoto__photoContainer'>
        <img className='uploadPostPhoto__photoContainer--photo' src={fileUrl} alt='' />
        <form className='uploadPostPhoto__form'>
          <input
            className='uploadPostPhoto__form--input'
            id='img'
            name='img'
            accept='image/*'
            type='file'
            alt='Image'
            multiple
            onChange={handleChange}
          />
          <label htmlFor='img'>{filename}</label>
        </form>
      </div>
    </header>
  );
};

export default UploadPostPhoto;
