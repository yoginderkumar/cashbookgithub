import { StyleSheet } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

// style.js
export const COLORS = {
  $PRIMARY: "#5172e3",
  $DARK_GREY: "#E7E7E7",
  $LIGHT_GREY: "#F2F2F2",
  $BACKGROUND: "#F6F6F6",
  $YELLOW: "#FFA400",
  $GREEN: "#31B45D",
  $RED: "#E94638",
  $ORANGE: "#FF550D",
  $BLUE: "#237FE4",
  $DARK_BLUE: "#1C4EB6",
  $DARK_TEXT: "#202020",
  $LIGHT_TEXT: "#666666",
  $DISABLE: "#B6B6B6",
  $GREY: "#EAEAEA",
  $WHITE: "#FFFFFF",
  $MAIN_GREY: "#F3F3F3",
  $BLACK_COLOR: "#000000",
  $CHARCOAL: "#36454F",
  $TRUTH_BLUE: "#4b84ba",
  $DARE_RED: "#d53267",
  $IF_YOU_HAD_TO: "#2a8890",
};

export const FONTS = {
  $FONT_XXXL: 28,
  $FONT_XXL: 26,
  $FONT_XL: 24,
  $FONT_L: 22,
  $FONT_ML: 20,
  $FONT_M: 18,
  $FONT_SMM: 16,
  $FONT_SM: 15,
  $FONT_S: 14,
  $FONT_MS: 13,
  $FONT_XS: 12,
  $FONT_XXS: 10,
};

export const FLAT_COLORS = {
  $RANDOM_COLOR_LIST: [
    "rgba(252, 92, 101,1.0)",
    "rgba(75, 123, 236,1.0)",
    "rgba(32, 191, 107,1.0)",
    "rgba(38, 222, 129,1.0)",
    "rgba(247, 183, 49,1.0)",
    "rgba(69, 170, 242,1.0)",
    "rgba(165, 94, 234,1.0)",
    "rgba(56, 103, 214,1.0)",
  ],
};

export const ICONS = {
  $ICON_XL: 30,
  $ICON_L: 25,
  $ICON_M: 20,
  $ICON_S: 15,
};

export const GenericStyles = StyleSheet.create({
  posAbs: {
    position: "absolute",
  },

  //Z-Index
  zIndex1: {
    zIndex: 1,
  },

  // font Size
  fontXXXL: {
    fontSize: FONTS.$FONT_XXXL,
  },
  fontXXL: {
    fontSize: FONTS.$FONT_XXL,
  },
  fontXL: {
    fontSize: FONTS.$FONT_XL,
  },
  fontL: {
    fontSize: FONTS.$FONT_L,
  },
  fontML: {
    fontSize: FONTS.$FONT_ML,
  },
  fontM: {
    fontSize: FONTS.$FONT_M,
  },
  fontSM: {
    fontSize: FONTS.$FONT_SM,
  },
  fontSMM: {
    fontSize: FONTS.$FONT_SMM,
  },
  fontS: {
    fontSize: FONTS.$FONT_S,
  },
  fontMS: {
    fontSize: FONTS.$FONT_MS,
  },
  fontXS: {
    fontSize: FONTS.$FONT_XS,
  },
  fontXXS: {
    fontSize: FONTS.$FONT_XXS,
  },

  fontPoppinsThin: {
    fontFamily: "Poppins-Thin",
  },

  fontPoppinsRegular: {
    fontFamily: "Poppins-Regular",
  },

  fontPoppinsMedium: {
    fontFamily: "Poppins-Medium",
  },

  fontPoppinsSemiBold: {
    fontFamily: "Poppins-SemiBold",
  },

  fontPoppinsBold: {
    fontFamily: "Poppins-Bold",
  },

  fontPoppinsExtraBold: {
    fontFamily: "Poppins-ExtraBold",
  },

  // flexbox
  f1: {
    flex: 1,
  },
  fdr: {
    flexDirection: "row",
  },
  fdc: {
    flexDirection: "column",
  },
  aic: {
    alignItems: "center",
  },
  aie: {
    alignItems: "flex-end",
  },
  jcc: {
    justifyContent: "center",
  },
  jcs: {
    justifyContent: "space-between",
  },
  jce: {
    justifyContent: "flex-end",
  },
  asc: {
    alignSelf: "center",
  },

  fc: {
    justifyContent: "center",
    alignItems: "center",
  },
  frc: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  // margins and padding
  mh4: {
    marginHorizontal: 4,
  },
  mh8: {
    marginHorizontal: 8,
  },
  mh12: {
    marginHorizontal: 12,
  },
  mh16: {
    marginHorizontal: 16,
  },
  mh24: {
    marginHorizontal: 24,
  },
  mh30: {
    marginHorizontal: 30,
  },

  mrMain: {
    marginRight: 24,
  },
  mlMain: {
    marginLeft: 24,
  },

  ph4: {
    paddingHorizontal: 4,
  },
  ph8: {
    paddingHorizontal: 8,
  },
  ph16: {
    paddingHorizontal: 16,
  },
  ph24: {
    paddingHorizontal: 24,
  },
  ph30: {
    paddingHorizontal: 30,
  },

  pv2: {
    paddingVertical: 2,
  },
  pv4: {
    paddingVertical: 4,
  },
  pv8: {
    paddingVertical: 8,
  },
  pv16: {
    paddingVertical: 16,
  },
  pv30: {
    paddingVertical: 30,
  },
  mr4: {
    marginRight: 4,
  },
  mr8: {
    marginRight: 8,
  },
  mr12: {
    marginRight: 12,
  },
  mr16: {
    marginRight: 16,
  },
  mr24: {
    marginRight: 16,
  },

  mv4: {
    marginVertical: 4,
  },
  mv8: {
    marginVertical: 8,
  },
  mv16: {
    marginVertical: 16,
  },
  mv24: {
    marginVertical: 24,
  },
  mv30: {
    marginVertical: 30,
  },

  ml2: {
    marginLeft: 2,
  },
  ml4: {
    marginLeft: 4,
  },
  ml8: {
    marginLeft: 8,
  },
  ml12: {
    marginLeft: 12,
  },
  ml16: {
    marginLeft: 16,
  },
  ml24: {
    marginLeft: 24,
  },

  mt2: {
    marginTop: 2,
  },
  mt4: {
    marginTop: 4,
  },
  mt8: {
    marginTop: 8,
  },
  mt12: {
    marginTop: 12,
  },
  mt16: {
    marginTop: 16,
  },
  mt24: {
    marginTop: 24,
  },
  mt48: {
    marginTop: 48,
  },

  mb4: {
    marginBottom: 4,
  },
  mb8: {
    marginBottom: 8,
  },
  mb12: {
    marginBottom: 12,
  },
  mb16: {
    marginBottom: 16,
  },
  mb24: {
    marginBottom: 24,
  },
  mb30: {
    marginBottom: 30,
  },

  borderW1: {
    borderWidth: 1,
  },

  br5: {
    borderRadius: 5,
  },

  br10: {
    borderRadius: 10,
  },

  width100: {
    width: "100%",
  },
  height100: {
    height: "100%",
  },

  // colors
  primaryColor: {
    color: COLORS.$PRIMARY,
  },
  whiteColor: {
    color: COLORS.$WHITE,
  },
  yellowColor: {
    color: COLORS.$YELLOW,
  },
  redColor: {
    color: COLORS.$RED,
  },

  mainGreyBGColor: {
    backgroundColor: COLORS.$MAIN_GREY,
  },
  primaryBGColor: {
    backgroundColor: COLORS.$PRIMARY,
  },
  whiteBGColor: {
    backgroundColor: COLORS.$WHITE,
  },
  greenBGColor: {
    backgroundColor: COLORS.$GREEN,
  },
  greyBGColor: {
    backgroundColor: COLORS.$GREY,
  },
  backgroundBGColor: {
    backgroundColor: COLORS.$BACKGROUND,
  },

  // text align
  textCenter: {
    textAlign: "center",
  },
  textRight: {
    textAlign: "right",
  },

  //Text Style
  bold: {
    fontWeight: "bold",
  },
  extraBold: {
    fontWeight: "900",
  },
});

export const circleStyle = function (size = 28) {
  return EStyleSheet.create({
    circle: {
      height: size,
      width: size,
      borderRadius: size / 2,
    },
  });
};

export default {
  ...COLORS,
  ...FONTS,
  ...ICONS,
};
