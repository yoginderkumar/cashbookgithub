import { combineReducers } from "redux";

import auth from "./auth";
import error from "./error";
import repositories from "./repositories";

const appReducer = combineReducers({
  auth,
  error,
  repositories
});

export default appReducer;
