//AUTH
export const authConstants = {
  REDUX_ADD_STORAGE: "REDUX_ADD_STORAGE",

  LOGIN_USER_ACTION_REQUEST: "LOGIN_USER_ACTION_REQUEST",
  LOGIN_USER_ACTION_SUCCESS: "LOGIN_USER_ACTION_SUCCESS",
  LOGIN_USER_ACTION_FAILURE: "LOGIN_USER_ACTION_FAILURE",

  LOGOUT_USER_ACTION_REQUEST: "LOGOUT_USER_ACTION_REQUEST",
  LOGOUT_USER_ACTION_SUCCESS: "LOGOUT_USER_ACTION_SUCCESS",
  LOGOUT_USER_ACTION_FAILURE: "LOGOUT_USER_ACTION_FAILURE",

  GET_AUTHENTICATED_USER_REQUEST: "GET_AUTHENTICATED_USER_REQUEST",
  GET_AUTHENTICATED_USER_SUCCESS: "GET_AUTHENTICATED_USER_SUCCESS",
  GET_AUTHENTICATED_USER_FAILURE: "GET_AUTHENTICATED_USER_FAILURE",
};

//Repos
export const repoConstants = {
  GET_REPOS_ACTION_REQUEST: "GET_REPOS_ACTION_REQUEST",
  GET_REPOS_ACTION_SUCCESS: "GET_REPOS_ACTION_SUCCESS",
  GET_REPOS_ACTION_FAILURE: "GET_REPOS_ACTION_FAILURE",

  ADD_NEW_REPO_ACTION_REQUEST: "ADD_NEW_REPO_ACTION_REQUEST",
  ADD_NEW_REPO_ACTION_SUCCESS: "ADD_NEW_REPO_ACTION_SUCCESS",
  ADD_NEW_REPO_ACTION_FAILURE: "ADD_NEW_REPO_ACTION_FAILURE",
};
