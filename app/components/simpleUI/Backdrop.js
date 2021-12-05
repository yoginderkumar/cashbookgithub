import React from "react";
import { TouchableOpacity } from "react-native";

import { styles } from "./styles";

function Backdrop({ onPress, style, ...props }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={[styles.backdrop, style]}
      {...props}
    />
  );
}

export default Backdrop;