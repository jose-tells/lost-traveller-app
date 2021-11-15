import React from 'react';
// Component
import UserProfileButton from './UserProfileButton';

const UserProfileSections = (props) => {
  const { user, setUserSection, pathname } = props;

  return (
    <div className='UserProfileSections__container'>
      <UserProfileButton
        userId={user.id}
        buttonName='Posts'
        pathname={pathname}
        itemsLength={user.contributions.posts.length}
        setUserSection={setUserSection}
        isMain
      />
      <UserProfileButton
        userId={user.id}
        buttonName='Photos'
        pathname={pathname}
        itemsLength={user.contributions.photos.length}
        setUserSection={setUserSection}
      />
      <UserProfileButton
        userId={user.id}
        buttonName='Comments'
        pathname={pathname}
        itemsLength={user.contributions.comments.length}
        setUserSection={setUserSection}
      />
    </div>
  );
};

export default UserProfileSections;
