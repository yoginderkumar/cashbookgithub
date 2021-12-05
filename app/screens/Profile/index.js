import React from "react";

import useProfile from "./useProfile";
import { Main, Header } from "./components";
import { Loader } from "../../components/simpleUI";
import { ModalBasic, GeneralContainer } from "../../components/compoundUI";

export default ({ navigation }) => {
  const {
    errorMsg,
    isApiLoading,
    loggedInUser,
    isLogoutLoading,
    closeModalHandler,
    onLogoutClickHandler,
  } = useProfile(navigation);

  const renderHeaderChild = () => {
    return isApiLoading ? null : <Header user={loggedInUser} />;
  };

  const renderMainChild = () => {
    return isApiLoading ? (
      <Loader />
    ) : (
      <Main
        logoutLoading={isLogoutLoading}
        onLogoutPress={onLogoutClickHandler}
      />
    );
  };

  const renderBottomChild = () => {
    return errorMsg.length ? (
      <ModalBasic
        isError
        isBasicView
        btnText="Close"
        text={errorMsg}
        onPress={closeModalHandler}
        heading="Something went wrong!"
        onPressBackdrop={closeModalHandler}
      />
    ) : null;
  };

  return (
    <GeneralContainer
      isWhiteBG
      headerChild={renderHeaderChild()}
      mainChild={renderMainChild()}
      bottomChild={renderBottomChild()}
      contentContainerStyle={{ flex: 1 }}
    />
  );
};
