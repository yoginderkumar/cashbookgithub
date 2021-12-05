import { useEffect, useState } from "react";
import Config from "react-native-config";
import { useDispatch } from "react-redux";
import { authorize } from "react-native-app-auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { reduxAddStorage, loginUserActionFail } from "../../../store/actions";
import useReduxSelector from "../../../config/hooks/useReduxSelector";

function useLogin() {
  const dispatch = useDispatch();
  const { error } = useReduxSelector();

  const [errorMsg, setErrorMsg] = useState("");
  const [isApiLoading, setIsApiLoading] = useState(false);
  const [isUpdateState, setIsUpdateState] = useState(false);

  useEffect(() => {
    if (isUpdateState) {
      setIsUpdateState(false);
      if (error && error.LOGIN_USER_ACTION) {
        setErrorMsg(error.LOGIN_USER_ACTION);
      }
    }
  }, [isUpdateState]);

  const onLoginClickHandler = async () => {
    setIsApiLoading(true);
    await _onLoginFlow();
    setIsApiLoading(false);
    setIsUpdateState(true);
  };

  const _onLoginFlow = async () => {
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
    authorize(config)
      .then((data) => {
        AsyncStorage.setItem("accessToken", data.accessToken);
        dispatch(
          reduxAddStorage({ accessToken: data.accessToken, isLoggedIn: true })
        );
      })
      .catch((err) => {
        dispatch(
          loginUserActionFail({
            error: true,
            errorType: err.error,
            errors: err.message,
          })
        );
      });
  };

  const closeModalHandler = () => {
    setErrorMsg("")
  }

  return {
    errorMsg,
    isApiLoading,

    closeModalHandler,
    onLoginClickHandler,
  };
}

export default useLogin;
