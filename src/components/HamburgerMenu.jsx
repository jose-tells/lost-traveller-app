import React from 'react';
//FontAwersome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function HamburgerMenu(props) {
  const {open}= props;
  // console.log(handleDisplayMenu)
  return (
    <div>
      <FontAwesomeIcon icon={faBars} size='2x' />
    </div>
  );
}
