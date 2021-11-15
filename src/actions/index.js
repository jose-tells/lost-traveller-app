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
  type: 'ADDING_RANKING',
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
