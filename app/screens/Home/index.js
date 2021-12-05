import React from "react";
import { View } from "native-base";

import useHome from "./useHome";

import Header from "./components/Header";
import RepoCard from "./components/RepoCard";
import CreateNewModal from "./components/CreateNewModal";
import { Loader, FlatListBasic } from "../../components/simpleUI";
import { ModalBasic, GeneralContainer } from "../../components/compoundUI";

export default ({ navigation }) => {
  const {
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
  } = useHome(navigation);

  const renderListHeader = () => (
    <Header onCreateNewClickHandler={toggleCreateNewModal} />
  );

  const renderItemHandler = ({ item }) => {
    return <RepoCard repo={item} />;
  };

  const renderFooterHandler = () => {
    return <View style={{ height: 60 }} />;
  };

  const renderMainChild = () => {
    return isApiLoading ? (
      <Loader />
    ) : (
      <FlatListBasic
        itemSeparator
        data={repositories}
        state={repositories}
        refreshing={refreshing}
        initialNumToRender={repositories.length}
        refreshHandler={pullRefresher}
        renderFooter={renderFooterHandler()}
        renderItemHandler={renderItemHandler}
        renderHeaderHandler={renderListHeader()}
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
    ) : isCreateNewModal ? (
      <ModalBasic onPressBackdrop={closeModalHandler}>
        <CreateNewModal
          repoName={repoName}
          errorText={errorText}
          onHandleChange={onHandleChange}
          isCreateRepoLoading={isCreateRepoLoading}
          onCreateClickHandler={onCreateClickHandler}
        />
      </ModalBasic>
    ) : null;
  };

  return (
    <GeneralContainer
      isWhiteBG
      isHeaderLess
      mainChild={renderMainChild()}
      bottomChild={renderBottomChild()}
      contentContainerStyle={{ flex: 1 }}
    />
  );
};
