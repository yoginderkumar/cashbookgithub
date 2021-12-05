import {
  dispatchAction,
} from "../../utils/helperFunctions";
import { authConstants } from "./types";
import * as Api from "../../api/cashbook";

export const getAuthenticatedUserAction = () => {
  return async (dispatch) => {
    const getAuthenticatedUserActionSuccess = (payload) => {
      return dispatch({
        type: authConstants.GET_AUTHENTICATED_USER_SUCCESS,
        payload,
      });
    };

    const getAuthenticatedUserActionFail = (error) => {
      return dispatch({
        type: authConstants.GET_AUTHENTICATED_USER_FAILURE,
        payload: error,
      });
    };

    try {
      dispatch({ type: authConstants.GET_AUTHENTICATED_USER_REQUEST });
      const payload = await Api.getAuthenticatedUser("user")
      dispatchAction(payload, getAuthenticatedUserActionSuccess, getAuthenticatedUserActionFail);
    } catch (error) {
      dispatch(getAuthenticatedUserActionFail(error));
    }
  };
};

export const reduxAddStorage = (payload) => {
  return {
    type: authConstants.REDUX_ADD_STORAGE,
    payload,
  };
};

export const loginUserActionSuccess = (payload) => {
  return {
    type: authConstants.LOGIN_USER_ACTION_SUCCESS,
    payload,
  };
};

export const loginUserActionFail = (error) => {
  console.log('26 error: ', error)
  return {
    type: authConstants.LOGIN_USER_ACTION_FAILURE,
    payload: error,
  };
};
