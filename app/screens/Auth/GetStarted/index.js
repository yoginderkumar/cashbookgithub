import React, { useEffect } from "react";
import { View } from "native-base";

import { ImageSource, TextBasic } from "../../../components/simpleUI";
import { GenericStyles } from "../../../utils/globalStyles";
import { cashbookIcon } from "../../../utils/iconsList";

export default ({ navigation }) => {
  useEffect(() => {
    redirectUser();
  }, []);

  const redirectUser = () => {
    setTimeout(() => {
      navigation.navigate("Login");
    }, 1000);
  };

  return (
    <View
      style={[
        GenericStyles.f1,
        GenericStyles.jcc,
        GenericStyles.aic,
        GenericStyles.ph30,
        GenericStyles.whiteBGColor,
      ]}
    >
      <View style={[GenericStyles.aic]}>
        <ImageSource source={cashbookIcon} />
        <TextBasic isBold isLarge isPrimary text="Github App" />
      </View>
    </View>
  );
};
