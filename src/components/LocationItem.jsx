import React from 'react';
import { Link } from 'react-router-dom';

const LocationItem = (props) => {

  const { postId, postName, postProvince, postCommentsLength, postPhoto } = props;

  return (
    <Link to={`/post/${postId}`} className='location__item--container'>
      <div className='location__item--dataContainer'>
        <h2 className='location__item--title'>{postName}</h2>
        <div className='location__item--detailsContainer'>
          <h3 className='location__item--province'>{postProvince}</h3>
          <h4 className='location__item--reviews'>
            {postCommentsLength}
            {' '}
            Reviews
          </h4>
        </div>
      </div>
      <img src={postPhoto} alt={postName} className='location__item--img' />
    </Link>
  );
};

export default LocationItem;
