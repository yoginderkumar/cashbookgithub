import EStyleSheet from "react-native-extended-stylesheet";
import { GenericStyles } from "../../utils/globalStyles";

// Image Circle
const imageCircleStyles = (size, containerStyles, textStyles) =>
  EStyleSheet.create({
    container: {
      height: size || 28,
      width: size || 28,
      borderRadius: size / 2 || 14,
      ...containerStyles,
    },
    center: {
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      ...GenericStyles.fontXL,
      ...GenericStyles.whiteColor,
      ...textStyles,
    },
  });

const styles = EStyleSheet.create({
  textBasic: {
    fontSize: 14,
  },
  // ButtonBasic
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 50,
    borderRadius: 5,
    backgroundColor: "#883E7F",
  },
  //Backdrop
  backdrop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2,
    backgroundColor: "rgba(20, 15, 38, 0.575408)",
  },
  //InputBasic
  inputFromInputBasic: {
    marginTop: -4,
    color: "#343434",
    ...GenericStyles.aic,
    ...GenericStyles.fontS,
    ...GenericStyles.fontPoppinsSemiBold,
  },
});

export { styles, imageCircleStyles };
