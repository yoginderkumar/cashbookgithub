import { dispatchAction } from "../../utils/helperFunctions";
import { repoConstants } from "./types";
import * as Api from "../../api/cashbook";

export const getReposUserAction = () => {
  return async (dispatch) => {
    const getReposUserActionSuccess = (payload) => {
      return dispatch({
        type: repoConstants.GET_REPOS_ACTION_SUCCESS,
        payload,
      });
    };

    const getReposUserActionFail = (error) => {
      return dispatch({
        type: repoConstants.GET_REPOS_ACTION_FAILURE,
        payload: error,
      });
    };

    try {
      dispatch({ type: repoConstants.GET_REPOS_ACTION_REQUEST });
      const payload = await Api.getRepos("repositories");
      dispatchAction(
        payload,
        getReposUserActionSuccess,
        getReposUserActionFail
      );
    } catch (error) {
      dispatch(getReposUserActionFail(error));
    }
  };
};

export const addNewRepoUserAction = (data) => {
  return async (dispatch) => {
    const addNewRepoUserActionSuccess = (payload) => {
      return dispatch({
        type: repoConstants.ADD_NEW_REPO_ACTION_SUCCESS,
        payload,
      });
    };

    const addNewRepoUserActionFail = (error) => {
      return dispatch({
        type: repoConstants.ADD_NEW_REPO_ACTION_FAILURE,
        payload: error,
      });
    };

    try {
      dispatch({ type: repoConstants.ADD_NEW_REPO_ACTION_REQUEST });
      const payload = await Api.addNewRepo(data, "newRepository");
      dispatchAction(
        payload,
        addNewRepoUserActionSuccess,
        addNewRepoUserActionFail
      );
    } catch (error) {
      dispatch(addNewRepoUserActionFail(error));
    }
  };
};
