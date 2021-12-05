import React from "react";
import { Content } from "native-base";

import HeaderBasic from "./HeaderBasic";
import { GenericStyles } from "../../utils/globalStyles";

function ContentBasic({
  children,
  isWhiteBG,
  headerChild,
  isHeaderLess,
  headerContainerStyle,
  contentContainerStyle,
  contentStyle,
  refreshControl,
  removeTopIcons,
  isShowAnnouncements,
  ...props
}) {
  return (
    <Content
      refreshControl={refreshControl}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={[
        {
          flex: 1,
          overflow: "hidden",
        },
        GenericStyles.backgroundBGColor,
        isWhiteBG && GenericStyles.whiteBGColor,
        contentContainerStyle,
      ]}
      style={[{
          overflow: "hidden",
          ...GenericStyles.backgroundBGColor,
        },
        isWhiteBG && GenericStyles.whiteBGColor,
        contentStyle,
      ]}
      {...props}
    >
      {!isHeaderLess ? (
        <HeaderBasic headerChild={headerChild} />
      ) : null}
      {children}
    </Content>
  );
}

export default ContentBasic;