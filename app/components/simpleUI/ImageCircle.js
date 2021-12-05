import React from "react";
import { Icon, View } from "native-base";

import TextBasic from "./TextBasic";
import { imageCircleStyles } from "./styles";
import ImageUriNative from "./ImageUriNative";
import randomColor from "../../utils/randomColor";
import { GenericStyles } from "../../utils/globalStyles";

export default ({
  isRandomBackground,
  size,
  image,
  initials,
  containerStyles,
  textStyles,
  isEditIcon,
}) => {
  let backgroundColor = "#FFF";
  if (isRandomBackground) {
    backgroundColor = randomColor(initials);
  }
  if (image) {
    containerStyles = { ...containerStyles, overflow: "hidden" };
  }

  containerStyles = { ...containerStyles, backgroundColor };
  let containerStylesEdit = { ...containerStyles, backgroundColor: "#000" };

  let dynamicStyles = imageCircleStyles(size, containerStyles, textStyles);

  let dynamicStylesEdit = imageCircleStyles(
    30,
    containerStylesEdit,
    textStyles
  );

  return (
    <>
      <View style={[dynamicStyles.container, !image && dynamicStyles.center]}>
        {image ? (
          <ImageUriNative uri={image} resizeMode="cover" />
        ) : (
          <TextBasic text={initials} style={dynamicStyles.text} />
        )}
      </View>
      {isEditIcon ? (
        <View
          style={[
            dynamicStylesEdit.container,
            GenericStyles.aic,
            GenericStyles.jcc,
            { marginTop: -25, marginRight: -45 },
          ]}
        >
          <Icon
            name="image-edit"
            type="MaterialCommunityIcons"
            style={[{ color: "white", fontSize: 20 }]}
          />
        </View>
      ) : null}
    </>
  );
};
