import { combineReducers } from "@reduxjs/toolkit";
import cafeReducer from "./DashboardReducer";

const rootReducer = combineReducers({
  data: cafeReducer,
});

export default rootReducer;
