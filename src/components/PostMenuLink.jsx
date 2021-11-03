import React from 'react';

const PostMenuLink = (props) => {
  const { icon, menuLink, altText } = props;

  return (
    <div className='postMenu__link'>
      <img className='postMenu__link--icon' src={icon} alt={altText} />
      <h2 className='postMenu__link--text'>{menuLink}</h2>
    </div>
  );
};

export default PostMenuLink;
