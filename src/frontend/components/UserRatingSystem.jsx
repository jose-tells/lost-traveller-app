import React from 'react';

const UserRatingSystem = ({ children }) => {
  return (
    <>
      <h1 className='postUserRatingSystem__title'>
        ¿Con tu experiencia en el lugar como la valorarías?
      </h1>
      <div className='postRankings__container'>
        <div className='postRankings__flex'>
          {children}
        </div>
      </div>
    </>
  );
};

export default UserRatingSystem;
