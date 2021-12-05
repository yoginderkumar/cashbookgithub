import React, { useState } from "react";
import { View } from "native-base";
import { BackHandler, TouchableOpacity } from "react-native";

import Tab from "./components/Tab";
import { BOTTOM_LIST } from "./components/DATA";
import { BackHandlerAndroid } from "../../../hoc";
import { useReduxSelector } from "../../../config/hooks";
import { SCREEN_WIDTH } from "../../../utils/helperFunctions";
import { GenericStyles } from "../../../utils/globalStyles";

export default ({ state, descriptors, navigation }) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  const [selectedTab, setSelectedTab] = useState("Home");

  const { user } = useReduxSelector();

  const navigateHandler = (key) => () => {
    setSelectedTab(key);
    return navigation.navigate(key);
  };

  function backClickHandler() {
    setSelectedTab("Home");
    navigation.navigate("Home");

    if (selectedTab === "Home") {
      BackHandler.exitApp();
    }

    return true;
  }

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <BackHandlerAndroid onBack={backClickHandler}>
      <View
        style={[
          GenericStyles.posAbs,
          GenericStyles.aic,
          GenericStyles.jcc,
          { bottom: 20, width: SCREEN_WIDTH, height: 50 },
        ]}
      >
        <View
          style={[
            GenericStyles.fdr,
            GenericStyles.jcs,
            GenericStyles.primaryBGColor,
            { width: 300, borderRadius: 100 },
          ]}
        >
            {BOTTOM_LIST.length
          ? BOTTOM_LIST.map((list) => {
              const { id, activeType } = list;
              return (
                <TouchableOpacity
                  key={id}
                  style={[GenericStyles.f1, GenericStyles.aic, GenericStyles.jcc, GenericStyles.ph16, GenericStyles.pv16]}
                  onPress={navigateHandler(activeType)}
                >
                  <Tab list={list} user={user} active={selectedTab} />
                </TouchableOpacity>
              );
            })
          : null}
        </View>
      </View>
    </BackHandlerAndroid>
  );
};
