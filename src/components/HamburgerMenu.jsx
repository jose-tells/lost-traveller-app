import React from 'react';
//FontAwersome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function HamburgerMenu(props) {
  const { isOpen, handleDisplayMenu } = props;

  const handleClick = () => {
    handleDisplayMenu(!isOpen);
  };

  return (
    <div
      className='hamburger__container'
    >
      <FontAwesomeIcon
        icon={faBars}
        size='2x'
        onClick={handleClick}
      />
    </div>
  );
}
