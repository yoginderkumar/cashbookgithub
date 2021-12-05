import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useReduxSelector } from "../hooks";
import { reduxAddStorage } from "../../store/actions";

function useRoutes() {
  const dispatch = useDispatch();

  const [isSignedIn, setIsSignedIn] = useState(false);
  const { isLoggedIn, accessToken } = useReduxSelector();

  useEffect(() => {
    loginCheck();
  }, [accessToken]);

  const loginCheck = async () => {
    const userAccessToken = await AsyncStorage.getItem("accessToken");
    if (userAccessToken || (accessToken && accessToken.length && isLoggedIn)) {
        userAccessToken && userAccessToken.length &&
        (await dispatch(
          reduxAddStorage({ accessToken: userAccessToken, isLoggedIn: true })
        ));
      setIsSignedIn(true);
    } else {
      setIsSignedIn(false);
    }
  };

  return {
    isSignedIn,
  };
}

export default useRoutes;
