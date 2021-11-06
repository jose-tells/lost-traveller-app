import React from 'react';

const UserProfileButton = (props) => {
  const { buttonName, itemsLength, setUserSection } = props;

  const handleClick = () => {
    setUserSection(buttonName);
  };

  return (
    <div className='UserProfileSections__userProfileButton'>
      <button
        className='UserProfileSections__userProfileButton--button'
        onClick={handleClick}
        type='button'
      >
        {itemsLength}
        <br />
        {buttonName}
      </button>
    </div>
  );
};

export default UserProfileButton;
