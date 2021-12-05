import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { COLORS, GenericStyles } from "../../../utils/globalStyles";

export default ({ size, color, removeFlex, style }) => (
  <View style={[styles.container, removeFlex && { flex: 0 }, style]}>
    <ActivityIndicator
      size={size || "large"}
      color={color || COLORS.$PRIMARY}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    ...GenericStyles.f1,
    ...GenericStyles.jcc,
    ...GenericStyles.fdr,
    justifyContent: "space-around",
  }
});
