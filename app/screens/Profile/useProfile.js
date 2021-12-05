import { useEffect, useState } from "react";
import Config from "react-native-config";
import { useDispatch } from "react-redux";
import { revoke } from "react-native-app-auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  getAuthenticatedUserAction,
  reduxAddStorage,
} from "../../store/actions";
import { isEmptyObject } from "../../utils/helperFunctions";
import { useHideTab, useReduxSelector } from "../../config/hooks";


function useProfile(navigation) {
  const dispatch = useDispatch();
  const { user, error } = useReduxSelector();

  const [errorMsg, setErrorMsg] = useState("");
  const [loggedInUser, setLoggedInUser] = useState({});
  const [closeTabBar, setCloseTabBar] = useState(false);
  const [isApiLoading, setIsApiLoading] = useState(true);
  const [isUpdateState, setIsUpdateState] = useState(false);
  const [isLogoutLoading, setIsLogoutLoading] = useState(false);

  useHideTab(navigation, { closeTabBar });

  useEffect(() => {
    callApi();
  }, []);

  useEffect(() => {
    if (isUpdateState) {
      setIsUpdateState(false);
      if(error && error.GET_AUTHENTICATED_USER) {
        setCloseTabBar(true)
        setErrorMsg(error.GET_AUTHENTICATED_USER)
        return
      }
      if (!isEmptyObject(user)) {
        setLoggedInUser(user);
      }
    }
  }, [isUpdateState]);

  const callApi = async () => {
    await dispatch(getAuthenticatedUserAction());
    setIsApiLoading(false);
    setIsUpdateState(true);
  };

  const onLogoutClickHandler = async () => {
    setIsLogoutLoading(true);
    await logoutAuthFlow();
    setIsLogoutLoading(false);
  };

  const logoutAuthFlow = async () => {
    const config = {
      redirectUrl:Config.REDIRECT_URL,
      clientId: Config.CLIENT_ID,
      clientSecret: Config.CLIENT_SECRET,
      scopes: ["identity", "repo", "gist"],
      additionalHeaders: { Accept: "application/json" },
      serviceConfiguration: {
        authorizationEndpoint: Config.AUTH_ENDPOINT,
        tokenEndpoint: Config.TOKEN_ENDPOINT,
        revocationEndpoint: Config.REVOCATION_ENDPOINT,
      },
    };
    revoke(config)
      .then(() => {
        removeAccessToken();
      })
      .catch(() => {
        removeAccessToken();
      });
  };

  const removeAccessToken = () => {
    AsyncStorage.removeItem("accessToken");
    dispatch(reduxAddStorage({ accessToken: "", isLoggedIn: false }));
  };

  const closeModalHandler = () => {
    setCloseTabBar(true)
    setErrorMsg("")
  }

  return {
    errorMsg,
    isApiLoading,
    loggedInUser,
    isLogoutLoading,

    closeModalHandler,
    onLogoutClickHandler,
  };
}

export default useProfile;
