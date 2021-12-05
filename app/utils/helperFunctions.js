import moment from "moment";
import { Dimensions, Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const isIOS = Platform.OS === "ios";
export const isAndroid = Platform.OS === "android";
export const SCREEN_WIDTH = Dimensions.get("window").width;
export const SCREEN_HEIGHT = Dimensions.get("window").height;

//Redux
export const dispatchAction = (payload, successAction, errorAction) => {
  if (payload.error) {
    return errorAction(payload);
  }
  return successAction(payload);
};

export const updateObject = (oldObject, updatedValues) => {
  return {
    ...oldObject,
    ...updatedValues,
  };
};

export const isEmptyObject = (obj) => {
  // null and undefined are "empty"
  if (obj == null) return true;

  // Assume if it has a length property with a non-zero value
  // that that property is correct.
  if (obj.length > 0) return false;
  if (obj.length === 0) return true;

  // If it isn't an object at this point
  // it is empty, but it can't be anything *but* empty
  // Is it empty?  Depends on your application.
  if (typeof obj !== "object") return true;

  // Otherwise, does it have any properties of its own?
  // Note that this doesn't handle
  // toString and valueOf enumeration bugs in IE < 9
  for (let key in obj) {
    if (hasOwnProperty.call(obj, key)) return false;
  }

  return true;
};

export const getData = async (key) => {
  try {
    let value = await AsyncStorage.getItem(key);
    return value;
  } catch (e) {
    console.log("store data error", e);
  }
};

export const removeData = async (value) => {
  try {
    return await AsyncStorage.removeItem(value);
  } catch (e) {
    console.log("store data error", e);
  }
};

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    return;
  } catch (e) {
    console.log("store data error", e);
  }
};

export const removeMultipleData = async (keys) => {
  try {
    await AsyncStorage.multiRemove(keys);
  } catch (e) {
    console.log("store data error", e);
  }
};

//Make first alphabet of a string capital and return
export const toUpperCaseAndDisplayFirstLetter = (string) => {
  if (!string) return "";
  return string.charAt(0).toUpperCase();
};

export const toUpperCaseFirstAlphabet = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

//youtube url parser
export const youtubeUrlParser = (url) => {
  var regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return match && match[7].length == 11 ? match[7] : false;
};

export const formatDate = (date, format) => {
  return moment(date).format(format || "MM-DD-YYYY");
};

export const formatTime = (time) => {
  // Hours, minutes and seconds
  var hrs = ~~(time / 3600);
  var mins = ~~((time % 3600) / 60);
  var secs = ~~time % 60;

  // Output like "1:01" or "4:03:59" or "123:03:59"
  var ret = "";
  if (hrs > 0) {
    ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
  }
  ret += "" + mins + ":" + (secs < 10 ? "0" : "");
  ret += "" + secs;
  return ret;
};

export const onlyNumbersAllowed = (string) => {
  let myString = string.replace(/\D/g, "");
  return myString;
};
