import React from 'react';
// Components
import UserInput from './UserInput';

const ContributionSection = () => {
  return (
    <UserInput
      minLength='20'
      maxLength='200'
      placeholder='Your contribution'
    />
  );
};

export default ContributionSection;
