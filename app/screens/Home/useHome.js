import { useEffect, useState } from "react";
import { Keyboard } from "react-native";
import { useDispatch } from "react-redux";

import {
  addNewRepoUserAction,
  getReposUserAction,
} from "../../store/actions/repositories";
import { useHideTab, useReduxSelector } from "../../config/hooks";
import { isEmptyObject } from "../../utils/helperFunctions";

function useHome(navigation) {
  const dispatch = useDispatch();
  const { error, repositories, newRepository } = useReduxSelector();

  const [errorMsg, setErrorMsg] = useState("");
  const [repoName, setRepoName] = useState("");
  const [errorText, setErrorText] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const [closeTabBar, setCloseTabBar] = useState(false);
  const [isApiLoading, setIsApiLoading] = useState(false);
  const [isUpdateState, setIsUpdateState] = useState(false);
  const [isCreateNewModal, setIsCreateNewModal] = useState(false);
  const [isCreateRepoLoading, setIsCreateRepoLoading] = useState(false);

  useHideTab(navigation, { closeTabBar });

  useEffect(() => {
    callApi();
  }, []);

  useEffect(() => {
    if (isUpdateState) {
      setIsUpdateState(false);
      if (error && error.GET_REPOS_ACTION) {
        setCloseTabBar(true);
        setErrorMsg(error.GET_REPOS_ACTION);
        return;
      }
      if (error && error.ADD_NEW_REPO_ACTION) {
        setCloseTabBar(true);
        setErrorMsg(error.ADD_NEW_REPO_ACTION);
        return;
      }
      if(!isEmptyObject(newRepository)) {
        setRepoName("")
        setErrorText("")
        closeModalHandler()
        callApi()
        return
      }
    }
  }, [isUpdateState]);

  const callApi = async () => {
    setIsApiLoading(true);
    await dispatch(getReposUserAction());
    setIsApiLoading(false);
  };

  const pullRefresher = () => {
    setRefreshing(true);
    callApi();
    setRefreshing(false);
  };

  const toggleCreateNewModal = () => {
    setCloseTabBar((prevToggle) => !prevToggle);
    setIsCreateNewModal((prevToggle) => !prevToggle);
  };

  const checkExistingRepo = (text) => {
    const filteredRepos =
      repositories && repositories.length
        ? repositories.filter((repo) => repo.name === text)
        : [];
    if (filteredRepos.length) {
      setErrorText("Repository with this name already exist!");
      return;
    }
    setErrorText("");
  };

  const onHandleChange = (text) => {
    checkExistingRepo(text);
    setRepoName(text);
  };

  const onCreateClickHandler = async () => {
    Keyboard.dismiss()
    setIsCreateRepoLoading(true);
    await dispatch(addNewRepoUserAction({ name: repoName }));
    setIsCreateRepoLoading(false);
    setIsUpdateState(true);
  };

  const closeModalHandler = () => {
    setCloseTabBar(false);
    setErrorMsg("");
    setIsCreateNewModal(false);
  };

  return {
    errorMsg,
    repoName,
    errorText,
    refreshing,
    repositories,
    isApiLoading,
    isCreateNewModal,
    isCreateRepoLoading,

    pullRefresher,
    onHandleChange,
    closeModalHandler,
    onCreateClickHandler,
    toggleCreateNewModal,
  };
}

export default useHome;
