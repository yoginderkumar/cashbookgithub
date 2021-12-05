import React from "react";
import FastImage from "react-native-fast-image";

import Backdrop from "./Backdrop";
import { Loader } from "./Loader";
import { GenericStyles } from "../../utils/globalStyles";


const ImageUriNative = ({ isLoading, uri, style, resizeMode, ...props }) => {
  let backgroundColor = "rgba(0, 0, 0, 0.26)";
  return (
    <FastImage
      style={[GenericStyles.width100, GenericStyles.height100, {backgroundColor}, style]}
      source={{
        uri,
        priority: FastImage.priority.high,
      }}
      resizeMode={
        resizeMode === "cover"
          ? FastImage.resizeMode.cover
          : FastImage.resizeMode.contain
      }
      {...props}
    >
      {isLoading ? (
        <>
          <Backdrop />
          <Loader style={{ zIndex: 5 }} />
        </>
      ) : null}
    </FastImage>
  );
};

export default ImageUriNative;