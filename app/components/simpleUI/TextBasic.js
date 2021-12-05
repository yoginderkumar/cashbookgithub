import React from "react";
import { Text } from "native-base";

import { styles } from "./styles";
import { GenericStyles } from "../../utils/globalStyles";

const TextBasic = ({
  text,
  style,
  isBold,
  isLarge,
  isWhite,
  isCenter,
  isPrimary,
  numberOfLines,
  ...props
}) => (
  <Text
    {...props}
    maxFontSizeMultiplier={1}
    style={[
      isWhite && GenericStyles.whiteColor,
      isBold && GenericStyles.fontPoppinsSemiBold,
      isCenter && {textAlign: 'center'},
      isPrimary && GenericStyles.primaryColor,
      styles.textBasic,
      isLarge && {fontSize: 24},
      style,
    ]}
    numberOfLines={numberOfLines}
  >
    {text}
  </Text>
);


export default TextBasic;