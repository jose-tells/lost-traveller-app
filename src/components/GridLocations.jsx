import React from 'react';
// Redux
import { connect } from 'react-redux';
// Components
import LocationItem from './LocationItem';
//styles
import '../assets/styles/Components/GridPlaces.styl';
//Media
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
              postInfo={post}
              postPhoto={sanBlas}
            />
          ))
        }
      </ul>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps, null)(GridLocations);
