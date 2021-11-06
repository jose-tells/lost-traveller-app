/* eslint-disable no-restricted-globals */
import React from 'react';
import { Link } from 'react-router-dom';

const PostMenuLink = (props) => {
  const { icon, menuLink, altText, setContribution, setForum, setSection } = props;

  const handleClick = () => {
    setSection(altText.toLowerCase());
    if (menuLink.toLowerCase() === 'contribution') {
      setContribution(true);
      setForum(false);
    } else {
      setContribution(false);
      setForum(true);
    }
  };

  if (menuLink.toLowerCase() === 'verified') {
    return (
      <Link to='/profile' className='postMenu__link'>
        <img className='postMenu__link--icon' src={icon} alt={altText} />
        <h2 className='postMenu__link--text'>{menuLink}</h2>
      </Link>
    );
  }

  return (
    <a href={`#${menuLink.toLowerCase()}`} onClick={handleClick} className='postMenu__link'>
      <img className='postMenu__link--icon' src={icon} alt={altText} />
      <h2 className='postMenu__link--text'>{menuLink}</h2>
    </a>
  );
};

export default PostMenuLink;
