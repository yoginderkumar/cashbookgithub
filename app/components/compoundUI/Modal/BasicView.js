import React from "react";

import { IconBasic, TextBasic } from "../../simpleUI";
import { GenericStyles, COLORS } from "../../../utils/globalStyles";

export default function BasicView({
  iconTop,
  isError,
  isSuccess,
  iconTopSize,
  iconTopColor,
  heading,
  text,
  subText,
  headingStyle,
}) {
  let icon = isSuccess ? "checkOutline" : isError ? "errorOutline" : iconTop;

  let iconColor = isSuccess
    ? COLORS.$GREEN
    : iconTop
    ? (iconTop === "successIcon" && COLORS.$GREEN) || iconTopColor
    : isError
    ? COLORS.$RED
    : "";

  return (
    <>
      {isError ? (
        <IconBasic
          name={icon}
          iconType="material"
          fontSize={iconTopSize || 48}
          color={iconColor}
        />
      ) : icon ? (
        <IconBasic name={icon} fontSize={iconTopSize || 48} color={iconColor} />
      ) : null}
      {heading ? (
        <TextBasic
          isBold
          isLarge
          text={isError ? "Something went wrong" : heading}
          style={[(isError || icon) && GenericStyles.mt12, headingStyle]}
        />
      ) : null}
      <TextBasic text={text} style={[GenericStyles.mt12, GenericStyles.mb24]} />
      {subText ? (
        <TextBasic
          text={subText}
          style={[GenericStyles.mt12, GenericStyles.mb24]}
        />
      ) : null}
    </>
  );
}
