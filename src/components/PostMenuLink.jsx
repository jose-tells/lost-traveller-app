/* eslint-disable no-restricted-globals */
import React from 'react';
import { Link } from 'react-router-dom';

const PostMenuLink = (props) => {
  const { icon, menuLink, altText } = props;

  if (menuLink.toLowerCase() === 'verified') {
    return (
      <Link to='/profile' className='postMenu__link'>
        <img className='postMenu__link--icon' src={icon} alt={altText} />
        <h2 className='postMenu__link--text'>{menuLink}</h2>
      </Link>
    );
  }

  return (
    <a href={`#${menuLink.toLowerCase()}`} className='postMenu__link'>
      <img className='postMenu__link--icon' src={icon} alt={altText} />
      <h2 className='postMenu__link--text'>{menuLink}</h2>
    </a>
  );
};

export default PostMenuLink;
