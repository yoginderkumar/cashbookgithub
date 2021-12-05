import { authConstants } from "../actions/types";
import { updateObject } from "../../utils/helperFunctions";

const INITIAL_STATE = {
  user: {},
  isLoggedIn: false,
  accessToken: "",
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case authConstants.REDUX_ADD_STORAGE:
    case authConstants.LOGIN_USER_ACTION_SUCCESS:
    case authConstants.GET_AUTHENTICATED_USER_SUCCESS:
      return updateObject(state, payload);
    default:
      return state;
  }
};
