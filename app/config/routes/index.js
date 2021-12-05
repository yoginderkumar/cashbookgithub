import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//services
import useRoutes from "./useRoutes";
import { authScreens, bottomScreens, userScreens } from "./DATA";
import BottomTabs from "../../screens/common/BottomTabs";
import { isReadyRef, navigationRef } from "../../library/NavigationService";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const allScreenType = {
  stack: Stack.Screen,
  tab: Tab.Screen,
};

export function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={(props) => {
        return <BottomTabs {...props} />;
      }}
      screenOptions={{ tabBarVisible: true, headerShown: false }}
    >
      {Object.entries({
        ...bottomScreens,
      }).map(([name, component]) => Screen("tab", { name, component }))}
    </Tab.Navigator>
  );
}

function Screen(screenType, screen) {
  const CustomScreen = allScreenType[screenType];
  return (
    <CustomScreen
      key={screen.name}
      name={screen.name}
      component={screen.component}
    />
  );
}

export default () => {
  const { isSignedIn } = useRoutes();

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}
    >
      <Stack.Navigator
        initialRouteName="GetStarted"
        screenOptions={{ headerShown: false }}
      >
        {Object.entries({
          ...(isSignedIn ? userScreens : authScreens),
        }).map(([name, component]) => {
          return Screen("stack", { name, component });
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
