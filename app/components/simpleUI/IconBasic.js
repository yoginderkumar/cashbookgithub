import React from "react";
import {
  Entypo,
  Feather,
  Ionicons,
  AntDesign,
  FontAwesome,
  FontAwesome5,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { FONTS, COLORS } from "../../utils/globalStyles";

const allIconsType = {
  feather: Feather,
  ionicons: Ionicons,
  material: MaterialIcons,
  materialComm: MaterialCommunityIcons,
  fontAwesome: FontAwesome,
  fontAwesome5: FontAwesome5,
  entypo: Entypo,
  AntD: AntDesign,
};

export default function IconBasic({
  iconType,
  name,
  left,
  right,
  fontSize,
  color,
  onPress,
  containerStyle,
}) {
  const CustomIcon = allIconsType[iconType || "ionicons"];

  let iconName =
    (name === "arrowBack" && "ios-arrow-back") ||
    (name === "arrowDown" && "ios-arrow-down") ||
    (name === "arrowForward" && "ios-arrow-forward") ||
    (name === "arrowPocket" && "pocket") ||
    (name === "arrowUp" && "ios-arrow-up") ||
    (name === "book" && "book") ||
    (name === "checkOutline" && "ios-checkmark-circle") ||
    (name === "clock" && "clockcircleo") ||
    (name === "closeCircle" && "ios-close-circle") ||
    (name === "db" && "database") ||
    (name === "errorOutline" && "error-outline") ||
    (name === "globe" && "ios-globe") ||
    (name === "home" && "home") ||
    (name === "logout" && "logout") ||
    (name === "mail" && "mail") ||
    (name === "power" && "power") ||
    (name === "rocket" && "rocket") ||
    (name === "twitter" && "twitter") ||
    (name === "user" && "user") ||
    (name === "users" && "users") ||
    (name === "wikipedia" && "wikipedia") ||
    (name === "youtube" && "youtube") ||
    (right && "ios-arrow-forward") ||
    (left && "ios-arrow-back");

  return (
    <CustomIcon
      onPress={onPress}
      name={iconName}
      size={fontSize || FONTS.$FONT_M}
      color={color || COLORS.$LIGHT_TEXT}
      style={containerStyle}
    />
  );
}
