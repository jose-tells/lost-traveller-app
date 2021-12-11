/* eslint-disable no-case-declarations */
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FILTER_RANK':
      const exist = state.filterRanks.find((rank) => (rank.rankId === action.payload.rankId));
      if (exist) {
        return state;
      }
      return {
        ...state,
        filterRanks: [...state.filterRanks, action.payload],
      };
    case 'REMOVE_FILTER_RANK':
      return {
        ...state,
        filterRanks: state.filterRanks.filter((ranks) => (ranks.rankId !== action.payload)) || [],
      };
    case 'GET_POST_SOURCE':
      return {
        ...state,
        post: state.posts.find((post) => (post.id === action.payload)) || [],
      };
    case 'ADD_RANKING':
      return {
        ...state,
        addRankings: action.payload,
      };
    case 'REMOVE_RANKING':
      return {
        ...state,
        addRankings: action.payload,
      };
    case 'ADD_RATING':
      return {
        ...state,
        addRatings: action.payload,
      };
    case 'REQUEST_RANKING':
      return {
        ...state,
        post: {
          ...state.post,
          rankings: [
            ...state.post.rankings,
            action.payload,
          ],
        },
      };
    case 'GET_USER':
      return {
        ...state,
        userRequest: action.payload,
      };
    case 'CREATE_PREVIEW':
      return {
        ...state,
        posts: [
          ...state.posts,
          action.payload,
        ],
      };
    case 'CLEAN_PREVIEW':
      return {
        ...state,
        post: action.payload,
      };
    case 'SING_IN_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'SING_UP_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'CREATE_COMMENT':
      return {
        ...state,
        post: {
          ...state.post,
          comments: [
            ...state.post.comments,
            action.payload,
          ],
        },
      };
    case 'DELETE_COMMENT':
      return {
        ...state,
        post: {
          ...state.post,
          comments: state.post.comments.filter((comment) => comment._id !== action.payload),
        },
      };
    case 'SET_COUNTER':
      return {
        ...state,
        counter: state.counter + 1,
      };
    default:
      return state;
  };
};

export default reducer;
