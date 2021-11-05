import React from 'react';
// Classnames
import classNames from 'classnames';
// Components
import ContributionSection from './ContributionSection';
import ForumSection from './ForumSection';

const CommentsSection = (props) => {

  const { section, setSection, isContribution, isForum, setContribution, setForum } = props;

  const handleContribution = () => {
    setSection('Contribution');
    setContribution(true);
    setForum(false);
  };

  const handleForum = () => {
    setSection('Forum');
    setContribution(false);
    setForum(true);
  };

  const itemStyles = classNames('commentsSection__item', {
    isContribution,
  });

  const forumStyles = classNames('commentsSection__item', {
    isForum,
  });

  return (
    <>
      <div className='commentsSection__container'>
        <h1 className={itemStyles} onClick={handleContribution}>Contribution</h1>
        <h1 className={forumStyles} onClick={handleForum}>Forum</h1>
      </div>
      {section.toLowerCase() === 'forum' ? <ForumSection /> : <ContributionSection /> }
    </>
  );
};

export default CommentsSection;
