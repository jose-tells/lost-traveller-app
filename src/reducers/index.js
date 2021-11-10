const reducer = (state, action) => {
  switch (action.type) {
    case 'ADDING_RANKING':
      return {
        ...state,
        post: {
          ...state.post,
          addRankings: action.payload,
        },
      };
    default:
      return state;
  };
};

export default reducer;
