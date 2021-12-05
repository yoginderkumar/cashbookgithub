import { useSelector } from "react-redux";

const useReduxSelector = () => {
  // auth
  const user = useSelector((state) => state.auth.user);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const accessToken = useSelector((state) => state.auth.accessToken);

  //Errors
  const error = useSelector((state) => state.error);

  //Repos
  const repositories = useSelector((state) => state.repositories.repositories)
  const newRepository = useSelector((state) => state.repositories.newRepository)


  return {
    //Auth
    user,
    isLoggedIn,
    accessToken,

    //Errors
    error,

    //Repos
    repositories,
    newRepository,
  };
};

export default useReduxSelector;