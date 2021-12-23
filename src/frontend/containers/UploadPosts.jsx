/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Classnames
import classNames from 'classnames';
// React-redux
import { connect } from 'react-redux';
import { createPost, createPreview, uploadPost, setCounter } from '../actions';
// Components
import Footer from '../components/Footer';
// Styles
import '../assets/styles/UploadPosts.styl';

const UploadPosts = (props) => {
  const {
    uploadPost,
    user,
    createPreview,
    counter,
    setCounter,
  } = props;
  // Styles
  const [inputLength, setInputLength] = useState(0);
  const [filename, setFilename] = useState('Choose an Image');
  const [fileUrl, setFileUrl] = useState('');
  // Dispatch user post info
  const [infoPost, setValues] = useState({
    title: '',
    province: '',
    averagePrice: '',
    photo: '',
    weather: {
      weatherDegree: '',
      weatherEmoji: [],
    },
    userCreator: {},
    rankings: [],
    review: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    uploadPost(infoPost);
  };

  const handlePhoto = (event) => {
    const url = URL.createObjectURL(event.target.files[0]);
    setFileUrl(url);
    setFilename(event.target.files[0].name);
  };

  const handleInput = (event) => {
    setInputLength(event.target.value.length);
    user.verified && setValues({
      ...infoPost,
      [event.target.name]: event.target.value,
      weather: {
        weatherDegree: 30,
        weatherEmoji: ['https://img.icons8.com/emoji/48/000000/sun-emoji.png', 'sunny'],
      },
      photo: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzgwMTV8MHwxfHNlYXJjaHwyfHxsYW5kc2NhcGV8ZW58MHx8fHwxNjM3ODAwNDg2&ixlib=rb-1.2.1&q=80&w=1080',
      userCreator: {
        id: user.id,
        name: user.name,
        username: user.username,
        photo: user.profilePhoto,
        verified: user.verified,
      },
    });
  };

  const showReview = fileUrl && infoPost.title && infoPost.province && infoPost.averagePrice;

  const handleClick = () => {
    createPreview({
      ...infoPost,
      id: String(counter),
      weather: {
        weatherDegree: 30,
        weatherEmoji: ['https://img.icons8.com/emoji/48/000000/sun-emoji.png', 'sunny'],
      },
      photo: fileUrl,
      comments: [],
      usersContributors: [],
    });
    setCounter();
  };

  const previewTextStyles = classNames('uploadPost__review--text', {
    showReview,
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
              name='title'
              type='text'
              placeholder='e.g. San Blas'
              required
              onChange={handleInput}
              autoComplete='on'
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
        <div className='uploadPost__review--container'>
          <Link
            to={showReview ? `/post/${String(counter)}` : '/upload'}
            onClick={showReview ? handleClick : () => { }}
            className={previewTextStyles}
          >
            Chequealo a tiempo real!
          </Link>
        </div>
        <button className='submitPostButton__button' type='submit'>Submit</button>
      </form>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    post: state.post,
    counter: state.counter,
  };
};

const mapDispatchToProps = {
  createPost,
  createPreview,
  uploadPost,
  setCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadPosts);
