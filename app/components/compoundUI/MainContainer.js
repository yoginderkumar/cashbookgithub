import React from "react";
import { Container } from "native-base";
import { StatusBar } from "react-native";

import { BackHandlerAndroid } from "../../hoc";
import { isIOS } from "../../utils/helperFunctions";
import { COLORS, GenericStyles } from "../../utils/globalStyles";

export default function MainContainer({
  isWhiteStatus,
  isGreyStatus,
  removeStatus,
  containerStyle,
  isWhiteBG,
  children,
  onBack,
}) {
  return (
    <BackHandlerAndroid onBack={onBack ? onBack : () => {}}>
      <StatusBar
        hidden={removeStatus ? removeStatus : false}
        backgroundColor={
          (isWhiteStatus && COLORS.$WHITE) ||
          (isGreyStatus && "#E5E5E5") ||
          COLORS.$PRIMARY
        }
        barStyle={
          ((isWhiteStatus || isGreyStatus || isIOS) && "dark-content") || "light-content"
        }
      />
      <Container
        style={[
          GenericStyles.f1,
          GenericStyles.whiteBGColor,
          isWhiteBG && GenericStyles.whiteBGColor,
          { ...GenericStyles.whiteBGColor },
          containerStyle,
        ]}
      >
        {children}
      </Container>
    </BackHandlerAndroid>
  );
}
