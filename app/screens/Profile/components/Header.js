import React from "react";
import { View } from "native-base";

import {
  IconBasic,
  ImageCircle,
  TextBasic,
} from "../../../components/simpleUI";
import { GenericStyles } from "../../../utils/globalStyles";
import { toUpperCaseAndDisplayFirstLetter } from "../../../utils/helperFunctions";

export default ({ user }) => {
  return (
    <View
      style={[
        GenericStyles.ph16,
        GenericStyles.pv30,
        GenericStyles.primaryBGColor,
        { borderBottomLeftRadius: 15, borderBottomRightRadius: 15 },
      ]}
    >
      <View style={[GenericStyles.fdr, GenericStyles.aic]}>
        <ImageCircle
          size={80}
          isRandomBackground
          image={user.avatar_url}
          initials={toUpperCaseAndDisplayFirstLetter(user.name)}
        />
        <View style={[GenericStyles.ml12]}>
          <TextBasic
            isBold
            isWhite
            text={user.name}
            style={[GenericStyles.fontM]}
          />
          <TextBasic
            isBold
            isWhite
            text={user.login}
            style={[GenericStyles.fontSM, GenericStyles.ml2, { marginTop: -4 }]}
          />
        </View>
      </View>
      <TextBasic
        isBold
        isWhite
        text={user.bio}
        style={[GenericStyles.fontSMM, GenericStyles.ml2, GenericStyles.mt4]}
      />
      <View style={[GenericStyles.fdr, GenericStyles.aic]}>
        <View style={[GenericStyles.fdr, GenericStyles.aic]}>
          <IconBasic name="users" iconType="feather" color="white" />
          <TextBasic
            isBold
            isWhite
            text={`${user.followers} followers`}
            style={[
              GenericStyles.fontSMM,
              GenericStyles.ml8,
              GenericStyles.mt4,
            ]}
          />
        </View>
        <View
          style={[GenericStyles.fdr, GenericStyles.aic, GenericStyles.mlMain]}
        >
          <IconBasic name="users" iconType="feather" color="white" />
          <TextBasic
            isBold
            isWhite
            text={`${user.following} following`}
            style={[
              GenericStyles.fontSMM,
              GenericStyles.ml8,
              GenericStyles.mt4,
            ]}
          />
        </View>
      </View>
      {user.twitter_username && (
        <View style={[GenericStyles.fdr, GenericStyles.aic]}>
          <IconBasic name="twitter" iconType="AntD" color="white" />
          <TextBasic
            isBold
            isWhite
            text={`${user.twitter_username}`}
            style={[
              GenericStyles.fontSMM,
              GenericStyles.ml8,
              GenericStyles.mt4,
            ]}
          />
        </View>
      )}
      {user.email && (
        <View style={[GenericStyles.fdr, GenericStyles.aic]}>
          <IconBasic name="mail" iconType="AntD" color="white" />
          <TextBasic
            isBold
            isWhite
            text={`${user.email}`}
            style={[
              GenericStyles.fontSMM,
              GenericStyles.ml8,
              GenericStyles.mt4,
            ]}
          />
        </View>
      )}
      <View style={[GenericStyles.fdr, GenericStyles.aic]}>
        <IconBasic name="book" iconType="feather" color="white" />
        <TextBasic
          isBold
          isWhite
          text={`${user.public_repos} repositories`}
          style={[GenericStyles.fontSMM, GenericStyles.ml8, GenericStyles.mt4]}
        />
      </View>
    </View>
  );
};
