import { combineReducers } from "@reduxjs/toolkit";
import cafeReducer from "./Reducers/DashboardReducer";

const rootReducer = combineReducers({
  cafeReducer,
});

export default rootReducer;
