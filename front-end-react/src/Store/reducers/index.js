import { combineReducers } from "redux";
import todos from "./todos";
import visibility from "./visibility";
import date from "./date";
import authentication from "./authentication";
import categories from "./categories";

export default combineReducers({
  todos,
  authentication,
  date,
  visibility,
  categories,
});
