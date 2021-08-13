const initState = {
  data: {}
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'GET_MOVIE_SUCCESS':
      return {
        ...state,
        data: action.payload.data,
      };
    default:
      return { ...state };
  }
};

export default reducer;
