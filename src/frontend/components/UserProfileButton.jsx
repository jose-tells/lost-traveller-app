import classNames from 'classnames';
import React from 'react';

const UserProfileButton = (props) => {
  const { buttonName, itemsLength, changeSection, isSelected } = props;

  const sectionStyles = classNames('UserProfileSections__userProfileButton', {
    isSelected,
  });

  return (
    <div className={sectionStyles}>
      <button
        className='UserProfileSections__userProfileButton--button'
        type='button'
        onClick={changeSection}
      >
        {itemsLength}
        <br />
        {buttonName}
      </button>
    </div>
  );
};

export default UserProfileButton;
