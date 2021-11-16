import React from 'react';
import { Link } from 'react-router-dom';
// Redux
import { connect } from 'react-redux';
// Classnames
import classNames from 'classnames';
// Components
import ContributionSection from './ContributionSection';
import ForumSection from './ForumSection';

const CommentsSection = (props) => {

  const { location, postComments, postId, user } = props;

  const isContribution = location.hash === '#contribution' || location.hash === '';
  const isForum = location.hash === '#forum';

  const itemStyles = classNames('commentsSection__item', {
    isContribution,
  });

  const forumStyles = classNames('commentsSection__item', {
    isForum,
  });

  return (
    <>
      <div className='commentsSection__container'>
        <Link
          to={{
            pathname: postId,
            hash: '#contribution',
          }}
          className={itemStyles}
        >
          Contribution
        </Link>
        <Link
          to={{
            pathname: postId,
            hash: '#forum',
          }}
          className={forumStyles}
        >
          Forum
        </Link>
      </div>
      {location.hash === '#forum' ? (
        <ForumSection
          user={user}
          postComments={postComments}
        />
      ) : <ContributionSection user={user} />}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(CommentsSection);
