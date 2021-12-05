import React from "react";
import { View } from "native-base";

import { TextBasic, ButtonBasic, IconBasic } from "../../../components/simpleUI";
import { COLORS, GenericStyles } from "../../../utils/globalStyles";

export default ({logoutLoading, onLogoutPress}) => {
    return(
        <View style={[GenericStyles.f1, GenericStyles.frc]}>
            <ButtonBasic loading={logoutLoading} loaderColor={COLORS.$RED} onPress={onLogoutPress} style={[GenericStyles.whiteBGColor, GenericStyles.borderW1, {width: 80, height: 80, borderRadius: 40}]}>
                <IconBasic name="power" iconType="feather" fontSize={34} color={COLORS.$RED} />
            </ButtonBasic>
            {/* <ButtonBasic loading={isLogoutLoading} loaderColor="white" text="Logout" onPress={onLogoutClickHandler} /> */}
        </View>
    )
}