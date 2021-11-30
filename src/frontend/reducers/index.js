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
        post: state.posts.find((post) => (post.id === Number(action.payload))) || [],
      };
    case 'ADD_RANKING':
      return {
        ...state,
        addRankings: action.payload,
      };
    case 'ADD_RATING':
      return {
        ...state,
        addRatings: action.payload,
      };
    case 'REMOVE_RANKING':
      return {
        ...state,
        addRankings: action.payload,
      };
    case 'GET_USER':
      return {
        ...state,
        userRequest: state.users.find((user) => (user.username === action.payload)) || {},
      };
    case 'CREATE_POST':
      return {
        ...state,
        post: action.payload,
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
        posts: state.posts.filter((post) => post.id !== 1),
      };
    case 'SING_IN_USER':
      return {
        ...state,
        user: state.users.find((user) => (user.username === action.payload)) || {},
      };
    case 'SING_UP_USER':
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
    default:
      return state;
  };
};

export default reducer;
