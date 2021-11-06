import React from 'react';
// Redux
import { connect } from 'react-redux';
// Classnames
import classNames from 'classnames';
// Components
import ContributionSection from './ContributionSection';
import ForumSection from './ForumSection';

const CommentsSection = (props) => {

  const { post, user, section, setSection, isContribution, isForum, setContribution, setForum } = props;

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
      {section.toLowerCase() === 'forum' ? <ForumSection user={user} postComments={post.comments} /> : <ContributionSection user={user} /> }
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(CommentsSection);
