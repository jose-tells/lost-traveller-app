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
      {!hasUser && (
        <Link
          to='/signin'
          className='slideMenuBar__links'
          onClick={handleClick}
        >
          Log In
        </Link>
      )}
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
      <div className='slideMenuBar__icon--container'>
        <a href='https://www.instagram.com/jose_tells/'>
          <FontAwesomeIcon icon={faInstagram} className='slideMenuBar__icon--item' />
        </a>
        <a href='https://www.youtube.com/channel/UCipdJHJR0MaQhHu1YrGP3Ag/'>
          <FontAwesomeIcon icon={faYoutube} className='slideMenuBar__icon--item' />
        </a>
        <a href='https://discord.gg/uvc9JyWzJ7/'>
          <FontAwesomeIcon icon={faDiscord} className='slideMenuBar__icon--item' />
        </a>
        <a href='https://twitter.com/jose_tells/'>
          <FontAwesomeIcon icon={faTwitter} className='slideMenuBar__icon--item' />
        </a>
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
