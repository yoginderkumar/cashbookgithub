import { repoConstants } from "../actions/types";
import { updateObject } from "../../utils/helperFunctions";

const INITIAL_STATE = {
  repositories: [],
  newRepository: {},
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case repoConstants.GET_REPOS_ACTION_SUCCESS:
    case repoConstants.ADD_NEW_REPO_ACTION_SUCCESS:
      return updateObject(state, payload);
    default:
      return state;
  }
};
