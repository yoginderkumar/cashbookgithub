import React from "react";
import { View } from "native-base";

import { GenericStyles } from "../../../../utils/globalStyles";
import {
  TextBasic,
  ButtonBasic,
  ImageSource,
  Loader,
} from "../../../../components/simpleUI";
import { github } from "../../../../utils/iconsList";

export default ({ isApiLoading, onLoginClickHandler }) => {
  return (
    <View
      style={[
        GenericStyles.ph30,
        GenericStyles.f1,
        GenericStyles.aic,
        GenericStyles.jcc,
      ]}
    >
      <TextBasic isBold isLarge isPrimary text="Login Here..." />
      <TextBasic isBold isPrimary text="CashBook presents github app" />
      <TextBasic
        isBold
        isPrimary
        text="Login using your github account"
        style={[GenericStyles.mb30]}
      />
      <ButtonBasic onPress={onLoginClickHandler}>
        {isApiLoading ? (
          <Loader color="#fff" />
        ) : (
          <>
            <TextBasic isBold isWhite text="Login with github" />
            <ImageSource
              source={github}
              resizeMode="cover"
              style={{ width: 30, height: 30, ...GenericStyles.ml8 }}
            />
          </>
        )}
      </ButtonBasic>
    </View>
  );
};
