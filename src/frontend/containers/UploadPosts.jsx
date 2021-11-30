/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Classnames
import classNames from 'classnames';
// React-redux
import { connect } from 'react-redux';
import { createPost, createPreview } from '../actions';
// Components
import Footer from '../components/Footer';
// Styles
import '../assets/styles/UploadPosts.styl';

const UploadPosts = (props) => {
  const { createPost, history, post, user, createPreview } = props;

  // Styles
  const [isReview, setReview] = useState(false);

  const [inputLength, setInputLength] = useState(0);
  const [filename, setFilename] = useState('Choose an Image');
  const [fileUrl, setFileUrl] = useState('');
  const [infoPost, setValues] = useState({
    id: 1,
    name: '',
    province: '',
    averagePrice: '',
    photo: '',
    weather: {
      weatherDegree: '',
      weatherEmoji: [],
    },
    userCreator: {},
    usersContributors: [],
    rankings: [],
    review: '',
    comments: [],
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    createPost(infoPost);
    console.log(post);
    history.push('/', { uploaded: true });
  };

  console.log(infoPost);

  const handlePhoto = (event) => {
    const url = URL.createObjectURL(event.target.files[0]);
    setFileUrl(url);
    setFilename(event.target.files[0].name);
  };

  const handleInput = (event) => {
    (fileUrl && infoPost.name && infoPost.province) ? setReview(true) : setReview(false);
    setInputLength(event.target.value.length);
    user.verified && setValues({
      ...infoPost,
      [event.target.name]: event.target.value,
      photo: fileUrl,
      userCreator: {
        id: user.id,
        name: user.firstName,
        username: user.username,
        photo: user.profilePhoto,
        verified: user.verified,
      },
    });
  };

  const handleClick = () => {
    createPreview(infoPost);
  };

  const previewContainerStyles = classNames('uploadPost__review--container', {
    isReview,
  });

  return (
    <>
      <form className='uploadPost__form' onSubmit={handleSubmit}>
        <header className='uploadPostPhoto__container'>
          <div className='uploadPostPhoto__photoContainer'>
            <img className='uploadPostPhoto__photoContainer--photo' src={fileUrl} alt='' />
            <div className='uploadPostPhoto__form'>
              <input
                className='uploadPostPhoto__form--input'
                id='img'
                name='photo'
                accept='image/*'
                type='file'
                multiple
                required
                onChange={handlePhoto}
              />
              <label htmlFor='img'>{filename}</label>
            </div>
          </div>
        </header>
        <section className='uploadPostInfo__container'>
          <div className='uploadPostInfo__item--container'>
            <label htmlFor='placeName'>
              <span className='uploadPostInfo__item--label'>
                Location Name
              </span>
            </label>
            <input
              className='uploadPostInfo__item--input'
              id='placeName'
              name='name'
              type='text'
              placeholder='e.g. San Blas'
              required
              onChange={handleInput}
            />
          </div>
          <div className='uploadPostInfo__item--container'>
            <label htmlFor='provinceName'>
              <span className='uploadPostInfo__item--label'>
                Province
              </span>
            </label>
            <input
              className='uploadPostInfo__item--input'
              id='provinceName'
              name='province'
              type='text'
              placeholder='e.g. Guna Yala'
              required
              onChange={handleInput}
            />
          </div>
          <div className='uploadPostInfo__item--container'>
            <label htmlFor='provinceName'>
              <span className='uploadPostInfo__item--label'>
                Average Price
              </span>
            </label>
            <input
              className='uploadPostInfo__item--input'
              id='provinceName'
              name='averagePrice'
              type='number'
              placeholder='e.g. 24'
              required
              onChange={handleInput}
            />
          </div>
        </section>
        <section className='postTextInput__container'>
          <div className='postTextInput__form'>
            <textarea
              name='review'
              className='postTextInput__form--input'
              onChange={handleInput}
              type='text'
              minLength='50'
              maxLength='200'
              required
              placeholder='Your contribution'
            />
          </div>
          <p className='postTextInput__characters'>
            {inputLength}
            /200
          </p>
        </section>
        <button className='submitPostButton__button' type='submit'>Submit</button>
      </form>
      <div className={previewContainerStyles}>
        <Link
          to='/post/1'
          onClick={handleClick}
          className='uploadPost__review--text'
        >
          See the
          <br />
          preview
        </Link>
      </div>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    post: state.post,
  };
};

const mapDispatchToProps = {
  createPost,
  createPreview,
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadPosts);
