import React, { useState } from 'react';

const PostTextInput = () => {
  const [inputLength, setInputLength] = useState(0);

  const handleChange = (event) => {
    setInputLength(event.target.value.length);
  };

  return (
    <section className='postTextInput__container'>
      <form className='postTextInput__form'>
        <textarea
          className='postTextInput__form--input'
          onChange={handleChange}
          type='text'
          minLength='100'
          maxLength='500'
          placeholder='Your contribution'
        />
      </form>
      <p className='postTextInput__characters'>
        {inputLength}
        /500
      </p>
    </section>
  );
};

export default PostTextInput;
