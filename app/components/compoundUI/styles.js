import EStyleSheet from "react-native-extended-stylesheet";
import { GenericStyles } from "../../utils/globalStyles";

const styles = EStyleSheet.create({
  // Card Basic
  cardBasicContainer: {
    padding: 20,
    overflow: "hidden",
    ...GenericStyles.br5,
    borderColor: "#EBEBEB",
    ...GenericStyles.zIndex1,
    ...GenericStyles.whiteBGColor,
  },
});

export { styles };