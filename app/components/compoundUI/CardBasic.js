import React from "react";
import { View } from "native-base";
import { TouchableOpacity } from "react-native";

import { styles } from "./styles";
import { circleStyle, GenericStyles } from "../../utils/globalStyles";

export default function CardBasic({
  center,
  circle,
  size,
  isBlur,
  isBorder,
  noPadding,
  containerStyle,
  onPress,
  children,
  ...props
}) {
  let circleStyles = circleStyle(size);

  return (
    <TouchableOpacity
      style={[
        styles.cardBasicContainer,
        center && GenericStyles.fc,
        circle && circleStyles.circle,
        isBorder && GenericStyles.borderW1,
        noPadding && { padding: 0 },
        containerStyle,
      ]}
      onPress={onPress}
      {...props}
    >
      {children}
    </TouchableOpacity>
  );
}
