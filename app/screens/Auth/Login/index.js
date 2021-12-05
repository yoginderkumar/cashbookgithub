import React from "react";

import useLogin from "./useLogin";
import Main from "./components/Main";
import { ModalBasic, GeneralContainer } from "../../../components/compoundUI";

export default () => {
  const { errorMsg, isApiLoading, closeModalHandler, onLoginClickHandler } =
    useLogin();

  const renderMainChild = () => {
    return (
      <Main
        isApiLoading={isApiLoading}
        onLoginClickHandler={onLoginClickHandler}
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
      mainChild={renderMainChild()}
      bottomChild={renderBottomChild()}
      contentContainerStyle={{ flex: 1 }}
    />
  );
};
