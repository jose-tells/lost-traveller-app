import React from 'react';
import { Link } from 'react-router-dom';

const SwitchLogMode = (props) => {
  const { link, linkText } = props;
  return (
    <div className='switchLogMode__container'>
      <p className='switchLogMode__title'>Don't have an account?</p>
      <Link to={`/${link}`} className='switchLogMode__link'>{linkText}</Link>
    </div>
  );
};

export default SwitchLogMode;
