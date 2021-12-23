import React from 'react';
// Components
import UserInput from './UserInput';

const ContributionSection = (props) => {
  const { user } = props;

  return (
    <div>
      <UserInput
        minLength='20'
        maxLength='200'
        placeholder='Your contribution'
        profilePhoto={user.photo}
        username={user.username}
      />
    </div>
  );
};

export default ContributionSection;
