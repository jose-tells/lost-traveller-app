import React from 'react';
// Components
import UserInput from './UserInput';

const ContributionSection = () => {
  return (
    <div id='contribution'>
      <UserInput
        minLength='20'
        maxLength='200'
        placeholder='Your contribution'
      />
    </div>
  );
};

export default ContributionSection;
