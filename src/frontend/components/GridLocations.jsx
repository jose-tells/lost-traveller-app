import React from 'react';
// Components
import LocationItem from './LocationItem';
// Media
import sanBlas from '../assets/img/san-BlasH.jpg';

const GridLocations = (props) => {

  const { posts } = props;

  return (
    <section className='locations__container'>
      <ul className='locations__gridContainer'>
        {
          posts.map((post) => (
            <LocationItem
              key={post.id}
              postId={post.id}
              postName={post.name}
              postProvince={post.province}
              postCommentsLength={post.comments.length}
              // postPhoto={post.photo}
              postPhoto={sanBlas}
            />
          ))
        }
      </ul>
    </section>
  );
};

export default GridLocations;
