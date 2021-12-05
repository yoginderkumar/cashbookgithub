import React from "react";
import { View } from "native-base";

import { styles } from "./styles";
import BasicView from "./BasicView";
import Backdrop from "../../simpleUI/Backdrop";
import ButtonBasic from "../../simpleUI/ButtonBasic";
import KeyboardAnimate from "../../../hoc/KeyboardAnimate";

export default function ModalBasic({
  isLoading,
  onPressBackdrop,
  disabledBackdrop,
  isBasicView,
  isCustomBottomBtn,
  isError,
  isSuccess,
  heading,
  iconTop,
  customIconTop,
  iconTopSize,
  iconTopColor,
  text,
  subText,
  btnText,
  headingStyle,
  btnContainerStyle,
  modalContainerStyle,
  onPress,
  children,
}) {
  return (
    <>
      <Backdrop disabled={disabledBackdrop} onPress={onPressBackdrop} />
      <KeyboardAnimate style={styles.keyboardAnimatedView}>
        <View style={[styles.modalContainer, modalContainerStyle]}>
          {isBasicView ? (
            <>
              <BasicView
                iconTop={iconTop}
                isError={isError}
                isSuccess={isSuccess}
                customIconTop={customIconTop}
                iconTopColor={iconTopColor}
                iconTopSize={iconTopSize}
                heading={heading}
                text={text}
                subText={subText}
                headingStyle={headingStyle}
              />
              {children}
              {!isCustomBottomBtn ? (
                <ButtonBasic
                  onPress={onPress}
                  loading={isLoading}
                  text={btnText || "Proceed"}
                  btnContainerStyle={btnContainerStyle}
                />
              ) : null}
            </>
          ) : (
            children
          )}
        </View>
      </KeyboardAnimate>
    </>
  );
}
