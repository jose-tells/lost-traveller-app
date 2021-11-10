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
    default:
      return state;
  };
};

export default reducer;
