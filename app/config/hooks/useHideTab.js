import { useLayoutEffect } from "react";

function useHideTab(navigation, params) {
  useLayoutEffect(() => {
    let tabBarVisible = true;
    if (params && params.closeTabBar) {
      tabBarVisible = false;
    }

    navigation.setOptions({ tabBarVisible });
  }, [navigation, params]);

  return;
}

export default useHideTab;