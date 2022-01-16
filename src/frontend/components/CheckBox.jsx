/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const CheckBox = ({ handleCheck }) => {
  return (
    <div className='signUserForm__checkboxContainer'>
      <input
        className='signUserForm__checkboxContainer--checkbox'
        type='checkbox'
        id='keepMe'
        onChange={handleCheck}
      />
      <label htmlFor='keepMe'>
        Remember me
      </label>
    </div>
  );
};

export default CheckBox;
