import React from "react";
import { View } from "native-base";
import { GenericStyles } from "../../utils/globalStyles";

function HeaderBasic({ headerChild, headerContainerStyle }) {
  return (
    <View
      style={[
        headerContainerStyle,
        GenericStyles.whiteBGColor,
      ]}
    >
      {headerChild}
    </View>
  );
}

export default HeaderBasic;
