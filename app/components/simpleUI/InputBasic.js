import React from "react";
import { View, Input } from "native-base";

import { styles } from "./styles";
import { GenericStyles } from "../../utils/globalStyles";

export default function InputBasic({
  value,
  isError,
  inputStyles,
  placeHolder,
  onChangeText,
  contatinerStyles,
  placeholderTextColor,
  ...props
}) {
  return (
    <View
      style={[
        GenericStyles.mainGreyBGColor,
        GenericStyles.ph8,
        GenericStyles.br5,
        GenericStyles.jcc,
        {
          height: 55,
          borderColor: "#E94638",
          borderWidth: isError && isError.length ? 1 : 0,
        },
        contatinerStyles,
      ]}
    >
      <Input
        value={value}
        placeholder={placeHolder}
        onChangeText={onChangeText}
        placeholderTextColor={placeholderTextColor || "rgba(52,52,52,0.5)"}
        style={[styles.inputFromInputBasic, inputStyles]}
        {...props}
      />
    </View>
  );
}
