//Auth Screens
import GetStarted from "../../screens/Auth/GetStarted";
import Login from "../../screens/Auth/Login";

//User screens
import Home from "../../screens/Home";
import Profile from "../../screens/Profile";

//TABS
import { Tabs } from "./index";

export const authScreens = {
  //Landing screen
  GetStarted: GetStarted,
  Login: Login,
};

export const bottomScreens = {
  Home: Home,
  Profile: Profile,
};

export const userScreens = {
  TabView: Tabs,
};
