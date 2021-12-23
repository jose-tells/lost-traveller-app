import React from 'react';
import { Link } from 'react-router-dom';
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';
import classNames from 'classnames';
// React-redux
import { connect } from 'react-redux';
import { logoutRequest } from '../actions';

const SlideMenuBar = (props) => {
  const { isOpen, handleDisplayMenu, user, logoutRequest } = props;

  const hasUser = Boolean(user.id);

  const handleClick = () => {
    handleDisplayMenu(false);
  };

  const handleLogout = () => {
    document.cookie = 'id=';
    document.cookie = 'name=';
    document.cookie = 'email=';
    document.cookie = 'token=';
    logoutRequest({});
    window.location.href = '/';
  };

  const slideMenuBarStyles = classNames('slideMenuBar__container', {
    isOpen,
  });

  return (
    <div className={slideMenuBarStyles}>
      <Link
        to='/'
        className='slideMenuBar__links'
        onClick={handleClick}
      >
        Menu
      </Link>
      <a
        href='#places'
        className='slideMenuBar__links'
        onClick={handleClick}
      >
        Places
      </a>
      {hasUser && (
        <Link
          to={`/profile/${user.username}`}
          className='slideMenuBar__links'
          onClick={handleClick}
        >
          Profile
        </Link>
      )}
      {hasUser && (
        <h2
          className='slideMenuBar__links'
          onClick={handleLogout}
        >
          Log out
        </h2>
      )}
      <Link
        to='/'
        className='slideMenuBar__links'
        onClick={handleDisplayMenu}
      >
        Contact
      </Link>
      <div className='slideMenuBar__icon--container'>
        <Link to='https://www.instagram.com/projectconquestt/'>
          <FontAwesomeIcon icon={faInstagram} className='slideMenuBar__icon--item' />
        </Link>
        <Link to='https://www.youtube.com/channel/UCipdJHJR0MaQhHu1YrGP3Ag'>
          <FontAwesomeIcon icon={faYoutube} className='slideMenuBar__icon--item' />
        </Link>
        <Link to='https://discord.gg/TF9zVsN6'>
          <FontAwesomeIcon icon={faDiscord} className='slideMenuBar__icon--item' />
        </Link>
        <Link to='https://twitter.com'>
          <FontAwesomeIcon icon={faTwitter} className='slideMenuBar__icon--item' />
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(SlideMenuBar);
