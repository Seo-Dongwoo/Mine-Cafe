import * as types from "../Actions/DashboardActions";

const initialState = {
  cafes: [],
  cafe: [],
};

const cafeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CAFES:
      return {
        ...state,
        cafes: action.payload,
      };
    default:
      return state;
  }
};

export default cafeReducer;
