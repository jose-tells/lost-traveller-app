import classNames from 'classnames';
import React from 'react';

export default function HamburgerMenu(props) {
  const { isOpen, isScrolled, handleDisplayMenu } = props;

  const hamburgerStyles = classNames('hamburger__item', {
    isOpen,
    isScrolled,
  });

  const handleClick = () => {
    handleDisplayMenu(!isOpen);
  };

  return (
    <button type='button' className='hamburger__container' onClick={handleClick}>
      <div className={hamburgerStyles} />
    </button>
  );
}
