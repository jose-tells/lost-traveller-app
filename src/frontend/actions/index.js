import axios from 'axios';

export const addFilterRank = (payload) => ({
  type: 'ADD_FILTER_RANK',
  payload,
});

export const removeFilterRank = (payload) => ({
  type: 'REMOVE_FILTER_RANK',
  payload,
});

export const getPostSource = (payload) => ({
  type: 'GET_POST_SOURCE',
  payload,
});

export const addRanking = (payload) => ({
  type: 'ADD_RANKING',
  payload,
});

export const addRating = (payload) => ({
  type: 'ADD_RATING',
  payload,
});

export const removeRanking = (payload) => ({
  type: 'REMOVE_RANKING',
  payload,
});

export const getUser = (payload) => ({
  type: 'GET_USER',
  payload,
});

export const createPost = (payload) => ({
  type: 'CREATE_POST',
  payload,
});

export const createPreview = (payload) => ({
  type: 'CREATE_PREVIEW',
  payload,
});

export const cleanPreview = (payload) => ({
  type: 'CLEAN_PREVIEW',
  payload,
});

export const singInUser = (payload) => ({
  type: 'SING_IN_USER',
  payload,
});

export const singUpUser = (payload) => ({
  type: 'SING_UP_USER',
  payload,
});

export const logoutRequest = (payload) => ({
  type: 'LOGOUT_REQUEST',
  payload,
});

export const createComment = (payload) => ({
  type: 'CREATE_COMMENT',
  payload,
});

export const deleteComment = (payload) => ({
  type: 'DELETE_COMMENT',
  payload,
});

export const setCounter = (payload) => ({
  type: 'SET_COUNTER',
  payload,
});

export const requestRanking = (payload) => ({
  type: 'REQUEST_RANKING',
  payload,
});

export const errorHandler = (payload) => ({
  type: 'ERROR_HANDLER',
  payload,
});

export const registerUser = (payload, redirectURL) => {
  return (dispatch) => {
    axios.post('/auth/sign-up', payload)
      .then((data) => dispatch(singUpUser(data)))
      .then(() => {
        window.location.href = redirectURL;
      })
      .catch((err) => console.error(err));
  };
};

export const loginUser = ({ email, password }, rememberMe, redirectURL) => {
  return (dispatch) => {
    axios({
      url: '/auth/sign-in',
      method: 'post',
      auth: {
        password,
        username: email,
      },
      data: {
        rememberMe,
      },
    })
      .then(({ data }) => {
        document.cookie = `email=${data.user.email}`;
        document.cookie = `name=${data.user.username}`;
        document.cookie = `id=${data.user.id}`;
        dispatch(singInUser(data.user));
      })
      .then(() => {
        window.location.href = redirectURL;
      })
      .catch((error) => dispatch(errorHandler(error)));
  };
};

export const getPost = (postId) => {
  return (dispatch) => {
    axios({
      url: `/posts/${postId}`,
      method: 'get',
    })
      .then(({ data }) => dispatch(getPostSource(data)))
      .catch((error) => console.error(error));
  };
};

export const createPostComment = (payload) => {
  return (dispatch) => {
    axios({
      url: '/comments',
      method: 'post',
      data: payload,
    })
      .then(({ data }) => dispatch(createComment({
        _id: data,
        ...payload,
      })))
      .catch((err) => console.error(err));
  };
};

export const getUserRequest = (username) => {
  return (dispatch) => {
    axios({
      url: `/users/${username}`,
      method: 'get',
    })
      .then(({ data }) => dispatch(getUser(data)))
      .catch((error) => console.log(error));
  };
};

export const createPostRanking = (payload) => {
  return (dispatch) => {
    axios({
      url: '/posts-rankings',
      method: 'post',
      data: payload,
    })
      .then((data) => dispatch(requestRanking(payload)))
      .catch((error) => console.error(error));
  };
};

export const deletePostComment = (commentId) => {
  return (dispatch) => {
    axios.delete(`/comments/${commentId}`)
      .then(() => dispatch(deleteComment(commentId)))
      .catch((err) => console.error(err));
  };
};

export const uploadPost = (payload) => {
  return (dispatch) => {
    axios({
      url: '/posts',
      method: 'post',
      data: payload,
    })
      .then((data) => {
        window.location.href = '/';
      })
      .catch((error) => console.error(error));
  };
};
