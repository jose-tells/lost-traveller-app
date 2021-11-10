/* eslint-disable no-case-declarations */
const reducer = (state, action) => {
  switch (action.type) {
<<<<<<< HEAD
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
=======
    case 'ADDING_RANKING':
      return {
        ...state,
        post: {
          ...state.post,
          addRankings: action.payload,
        },
>>>>>>> 656a579dd6065d0ea6e0ddba8b5f8de052cea6b5
      };
    default:
      return state;
  };
};

export default reducer;
