import React, { Component } from "react";
import { Animated, Keyboard } from "react-native";

import { isIOS } from "../utils/helperFunctions";

class KeyboardAnimate extends Component {
  constructor(props) {
    super(props);
    this.keyboardHeight = new Animated.Value(0.01);
  }

  componentDidMount() {
    let show = "keyboardDidShow",
      hide = "keyboardDidHide";
    if (isIOS) {
      (show = "keyboardWillShow"), (hide = "keyboardWillHide");
    }

    this.keyboardDidShowListener = Keyboard.addListener(
      show,
      this._keyboardDidShow
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      hide,
      this._keyboardDidHide
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow = event => {
    Animated.timing(this.keyboardHeight, {
      toValue: this.props.height
        ? this.props.height
        : this.props.hasOwnProperty("iOSAnimate") && isIOS
        ? 0
        : event.endCoordinates.height,
      duration: 250,
      useNativeDriver: true
    }).start();
  };

  _keyboardDidHide = () => {
    Animated.timing(this.keyboardHeight, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true
    }).start();
  };

  render() {
    return (
      <Animated.View
        style={{
          ...this.props.style
        }}
      >
        {this.props.children || null}
      </Animated.View>
    );
  }
}

export default KeyboardAnimate;