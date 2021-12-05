import React from "react";
import { Image } from "react-native";

const ImageSource = ({ source, style, resizeMode, ...props }) => (
  <Image
    source={source}
    style={style}
    resizeMode={resizeMode || "contain"}
    {...props}
  />
);

export default ImageSource;