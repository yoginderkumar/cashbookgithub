import React from "react";
import { View } from "native-base";

import {
  ButtonBasic,
  InputBasic,
  TextBasic,
} from "../../../components/simpleUI";
import { GenericStyles } from "../../../utils/globalStyles";

export default ({
  repoName,
  errorText,
  isCreateRepoLoading,

  onHandleChange,
  onCreateClickHandler,
}) => {
  return (
    <View>
      <TextBasic isBold isLarge text="Create New Repository" />
      <View
        style={[
          GenericStyles.fdr,
          GenericStyles.aic,
          GenericStyles.jcs,
          GenericStyles.mt24,
        ]}
      >
        <InputBasic
          value={repoName}
          isError={errorText}
          onChangeText={onHandleChange}
          contatinerStyles={{ width: "75%" }}
          placeHolder="Enter repository name..."
        />
        <ButtonBasic
          text="Create"
          loaderColor="white"
          style={{ width: "20%" }}
          loading={isCreateRepoLoading}
          onPress={onCreateClickHandler}
          disabled={!repoName.length || errorText.length || isCreateRepoLoading}
        />
      </View>
      {errorText && errorText.length ? (
        <TextBasic
          isBold
          text={errorText}
          style={[GenericStyles.mt8, GenericStyles.redColor]}
        />
      ) : null}
    </View>
  );
};
