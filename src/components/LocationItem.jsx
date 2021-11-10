import React from 'react';
import { Link } from 'react-router-dom';

const LocationItem = (props) => {

  const { postInfo, postPhoto } = props;

  return (
    <Link to={`/post/${postInfo.id}`} className='location__item--container'>
      <div className='location__item--dataContainer'>
        <h2 className='location__item--title'>{postInfo.name}</h2>
        <div className='location__item--detailsContainer'>
          <h3 className='location__item--province'>{postInfo.province}</h3>
          <h4 className='location__item--reviews'>
            {postInfo.comments.length}
            {' '}
            Reviews
          </h4>
        </div>
      </div>
      <img src={postPhoto} alt={postInfo.name} className='location__item--img' />
    </Link>
  );
};

export default LocationItem;
