import React from 'react';
// Component
import UserProfileButton from './UserProfileButton';

const UserProfileSections = (props) => {
  const { setUserSection } = props;

  const postLength = 3;
  const photosLength = 4;
  const commentsLength = 10;

  return (
    <div className='UserProfileSections__container'>
      <UserProfileButton
        buttonName='Posts'
        itemsLength={postLength}
        setUserSection={setUserSection}
      />
      <UserProfileButton
        buttonName='Photos'
        itemsLength={photosLength}
        setUserSection={setUserSection}
      />
      <UserProfileButton
        buttonName='Comments'
        itemsLength={commentsLength}
        setUserSection={setUserSection}
      />
    </div>
  );
};

export default UserProfileSections;
