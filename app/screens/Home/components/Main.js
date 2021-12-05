import React from "react";
import { View } from "native-base";

import { GenericStyles } from "../../../utils/globalStyles";
import { ButtonBasic, TextBasic } from "../../../components/simpleUI";
import RepoCard from "./RepoCard";

export default ({ repos }) => {
  return (
    <View style={[GenericStyles.ph24, GenericStyles.pv30]}>
      <TextBasic text="Home Screen" />
      {repos && repos.length ? (
        repos.map((repo, i) => <RepoCard key={i} repo={repo} />)
      ) : (
        <View>
          <TextBasic text="No repositories" />
        </View>
      )}
    </View>
  );
};
