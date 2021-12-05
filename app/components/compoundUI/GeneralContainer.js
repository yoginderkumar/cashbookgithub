import React from "react";

import ContentBasic from "./ContentBasic";
import MainContainer from "./MainContainer";

function GeneralContainer({
  isWhiteBG,
  isHeaderLess,
  isGreyStatus,
  isWhiteStatus,
  removeStatus,
  contentStyle,
  containerStyle,
  contentContainerStyle,
  refreshControl,
  headerChild,
  mainChild,
  bottomChild,
  onBackPress,
  onBackAndroidPress,
}) {
  return (
    <MainContainer
      isWhiteStatus={isWhiteStatus}
      isGreyStatus={isGreyStatus}
      removeStatus={removeStatus}
      isWhiteBG={isWhiteBG}
      containerStyle={containerStyle}
      onBack={onBackAndroidPress || onBackPress}>
      <ContentBasic
        isWhiteBG={isWhiteBG}
        headerChild={headerChild}
        isHeaderLess={isHeaderLess}
        contentStyle={contentStyle}
        refreshControl={refreshControl}
        contentContainerStyle={contentContainerStyle} >
        {mainChild}
      </ContentBasic>
      {bottomChild}
    </MainContainer>
  );
}

export default GeneralContainer;
