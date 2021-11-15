import React from 'react';
import { Link } from 'react-router-dom';

const UserProfileButton = (props) => {
  const { buttonName, itemsLength, pathname, isMain } = props;

  return (
    <div className='UserProfileSections__userProfileButton'>
      <Link
        to={{
          pathname,
          hash: isMain ? false : buttonName.toLowerCase(),
        }}
        className='UserProfileSections__userProfileButton--button'
        type='button'
      >
        {itemsLength}
        <br />
        {buttonName}
      </Link>
    </div>
  );
};

export default UserProfileButton;
