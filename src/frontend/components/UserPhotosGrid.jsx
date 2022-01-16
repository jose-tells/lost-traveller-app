import React from 'react';

const UserPhotosGrid = ({ children }) => {
  return (
    <>
      <section className='userPhotosGrid__container'>
        {children}
      </section>
    </>
  );
};

export default UserPhotosGrid;
