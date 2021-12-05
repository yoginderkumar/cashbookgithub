import EStyleSheet from "react-native-extended-stylesheet";
import { GenericStyles } from "../../../utils/globalStyles";

const styles = EStyleSheet.create({
  // Modal
  modalContainer: {
    paddingBottom: 30,
    paddingTop: 40,
    ...GenericStyles.ph24,
    ...GenericStyles.brTL15,
    ...GenericStyles.brTR15,
    ...GenericStyles.width100,
    ...GenericStyles.whiteBGColor,
  },

  keyboardAnimatedView: {
    paddingTop: 24,
    bottom: 0,
    zIndex: 2,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 3,
    shadowRadius: 17,
    shadowOpacity: 1,
    ...GenericStyles.posAbs,
    ...GenericStyles.width100,
  },
});

export { styles };
