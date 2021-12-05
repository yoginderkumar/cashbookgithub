import React from "react";
import { Icon } from "native-base";

import { TextBasic } from "../../../../components/simpleUI";
import { GenericStyles } from "../../../../utils/globalStyles";

export default ({ list, active }) => {
  return (
    <>
      <Icon
        name={list.icon}
        type={list.type}
        style={[
          active === list.activeType
            ? GenericStyles.yellowColor
            : GenericStyles.whiteColor,
          GenericStyles.fontL,
        ]}
      />
      <TextBasic text={list.name} style={[active === list.activeType
            ? GenericStyles.yellowColor
            : GenericStyles.whiteColor]} />
    </>
  );
};
