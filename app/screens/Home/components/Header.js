import React from "react";
import { View } from "native-base";

import { GenericStyles } from "../../../utils/globalStyles";
import { ButtonBasic, TextBasic } from "../../../components/simpleUI";

export default ({onCreateNewClickHandler}) => {
  return (
    <View style={[GenericStyles.ph16, GenericStyles.pv30, GenericStyles.fdr, GenericStyles.aic, GenericStyles.jcs]}>
      <TextBasic isBold isLarge text="Repositories" />
      <ButtonBasic onPress={onCreateNewClickHandler} text="Create New" style={[{width: "30%", height: 40}]} />
    </View>
  );
};
