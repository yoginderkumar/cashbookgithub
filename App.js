import React from "react";
import { Root } from "native-base";
import { useFonts } from "expo-font";
import { LogBox } from "react-native";
import { Provider } from "react-redux";
import { decode, encode } from "base-64";
import EStyleSheet from "react-native-extended-stylesheet";

import { store } from "./app/store";
import Navigator from "./app/config/routes";
import { PRE_LOAD_FONTS } from "./app/assets/assetsList";

//Ignore warnings
LogBox.ignoreAllLogs();

// btoa
if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

// Adding EStylesheet
EStyleSheet.build();

export default function App() {
  //Loading Fonts
  let [fontsLoaded] = useFonts(PRE_LOAD_FONTS);
  return fontsLoaded ? (
    <Provider store={store}>
      <Root>
        <Navigator />
      </Root>
    </Provider>
  ) : null;
}
