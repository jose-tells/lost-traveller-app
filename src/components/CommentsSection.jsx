import React, { useState } from 'react';
// Components
import ContributionSection from './ContributionSection';
import ForumSection from './ForumSection';

const CommentsSection = () => {
  const [section, setSection] = useState('Contribution');

  const handleContribution = () => {
    setSection('Contribution');
  };

  const handleForum = () => {
    setSection('Forum');
  };

  return (
    <>
      <div className='commentsSection__container'>
        <h1 onClick={handleContribution}>Contribution</h1>
        <h1 onClick={handleForum}>Forum</h1>
      </div>
      {section.toLowerCase() === 'forum' ? <ForumSection /> : <ContributionSection /> }
    </>
  );
};

export default CommentsSection;
