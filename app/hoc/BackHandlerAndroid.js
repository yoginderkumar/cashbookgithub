import React from "react";
import { BackHandler } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

function BackHandlerAndroid({ onBack, children }) {
  useFocusEffect(
    React.useCallback(() => {
      BackHandler.addEventListener("hardwareBackPress", onBack);

      return () => {
        BackHandler.removeEventListener("hardwareBackPress", onBack);
      };
    }, [onBack])
  );

  return children || null;
}

export default BackHandlerAndroid;