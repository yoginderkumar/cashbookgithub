import React from "react";
import { TouchableOpacity } from "react-native";
import { GenericStyles } from "../../utils/globalStyles";

import { Loader } from "./Loader";
import { styles } from "./styles";
import TextBasic from "./TextBasic";

const ButtonBasic = ({
  text,
  disabled,
  loading,
  loaderColor,
  loaderSize,
  onPress,
  style,
  textStyle,
  btnContainerStyle,
  isAlternateStyle,
  isInactive,
  children,
  ...props
}) => {
  return (
    <TouchableOpacity
      disabled={disabled || loading}
      onPress={onPress}
      {...props}
      style={[
        {
          height: 50,
          ...GenericStyles.frc,
          ...GenericStyles.br5,
          ...GenericStyles.width100,
          ...GenericStyles.primaryBGColor,
        },
        style,
      ]}
    >
      {loading ? (
        <Loader size={loaderSize} color={loaderColor} />
      ) : text ? (
        <TextBasic
          text={text}
          isBold
          style={[GenericStyles.whiteColor, textStyle]}
        />
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};

export default ButtonBasic;
