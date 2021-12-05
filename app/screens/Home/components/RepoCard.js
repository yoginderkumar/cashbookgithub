import React from "react";
import { View } from "native-base";

import { TextBasic } from "../../../components/simpleUI";
import { CardBasic } from "../../../components/compoundUI";
import { GenericStyles } from "../../../utils/globalStyles";
import { formatDate } from "../../../utils/helperFunctions";

export default ({ repo }) => {
  return (
    <CardBasic
      containerStyle={[
        GenericStyles.br5,
        GenericStyles.mh16,
        GenericStyles.borderW1,
      ]}
    >
      <View style={[GenericStyles.fdr, GenericStyles.aic, GenericStyles.jcs]}>
        <TextBasic
          isBold
          isPrimary
          numberOfLines={1}
          text={repo.name}
          style={[GenericStyles.fontSMM, { width: "70%" }]}
        />
        <TextBasic
          isBold
          isWhite
          text={repo.visibility}
          style={[
            GenericStyles.fontS,
            GenericStyles.greenBGColor,
            GenericStyles.br5,
            GenericStyles.mlMain,
            GenericStyles.ph8,
            GenericStyles.pv2,
            GenericStyles.br10,
          ]}
        />
      </View>
      <TextBasic
        text={repo.description || "No Description available"}
        style={[GenericStyles.mt12, GenericStyles.fontSMM]}
      />
      <TextBasic
        isBold
        text={`Created on ${formatDate(repo.created_at, "MMM DD, YYYY")}`}
        style={[GenericStyles.mt12]}
      />
      <TextBasic
        isBold
        text={`Last updated on ${formatDate(repo.updated_at, "MMM DD, YYYY")}`}
      />
    </CardBasic>
  );
};
