import React from 'react';

const LogInput = ({ inputLabel, inputType, inputName, valueRetrieve }) => {
  return (
    <div className='signUserForm__inputContainer'>
      <h2 className='signUserForm__title'>{inputLabel}</h2>
      <input
        type={inputType}
        name={inputName}
        className='signUserForm__input'
        onChange={valueRetrieve}
      />
    </div>
  );
};

export default LogInput;
