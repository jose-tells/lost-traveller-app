import React from 'react';
// Component
import UserProfileButton from './UserProfileButton';

const UserProfileSections = (props) => {
  const { user, setUserSection } = props;

  return (
    <div className='UserProfileSections__container'>
      <UserProfileButton
        buttonName='Posts'
        itemsLength={user.contributions.posts.length}
        setUserSection={setUserSection}
      />
      <UserProfileButton
        buttonName='Photos'
        itemsLength={user.contributions.photos.length}
        setUserSection={setUserSection}
      />
      <UserProfileButton
        buttonName='Comments'
        itemsLength={user.contributions.comments.length}
        setUserSection={setUserSection}
      />
    </div>
  );
};

export default UserProfileSections;
