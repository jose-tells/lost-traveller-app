import React, { useState } from 'react';
// Classnames
import classNames from 'classnames';
// Components
import UserPhoto from './UserPhoto';
// Media
import photo1 from '../assets/img/PerfilPhoto.jpg';

const UserInput = (props) => {
  const { minLength, maxLength, placeholder, isForum } = props;

  const [inputLength, setLength] = useState(0);

  const handleInput = (event) => {
    setLength(event.target.value.length);
  };

  const textAreaStyles = classNames('commentsSection__contribution--userInput', {
    isForum,
  });

  return (
    <div className='commentsSection__contribution'>
      <UserPhoto testProfilePhoto={photo1} />
      <div className='commentsSection__contribution--container'>
        <form className='commentsSection__contribution--form'>
          <textarea
            className={textAreaStyles}
            type='text'
            id='contribution'
            minLength={minLength}
            maxLength={maxLength}
            placeholder={placeholder}
            onInput={handleInput}
          />
        </form>
        <span className='commentsSection__contribution--textLimit'>
          {inputLength}
          /
          {maxLength}
        </span>
      </div>
    </div>
  );
};

export default UserInput;
