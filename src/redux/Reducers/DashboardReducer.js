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
    case types.ADD_CAFE:
      return {
        ...state,
        cafes: state.cafes,
      };
    case types.DELETE_CAFE:
      return {
        ...state,
        cafes: state.cafes.filter((cafe) => cafe.id !== action.payload),
      };
    default:
      return state;
  }
};

export default cafeReducer;
