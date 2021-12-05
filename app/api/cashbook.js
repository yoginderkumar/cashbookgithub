import axios from "axios";
import Config from "react-native-config";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { url } from "./url";

const getToken = async () => {
  Authorization = await AsyncStorage.getItem("accessToken");
};

// const deleteRequest = () => ({ method: "DELETE"});
const postRequest = (data) => ({ method: "POST", data });

export const getAuthenticatedUser = (key) => {
  return callApi(url.user, key)
}

export const getRepos = (key) => {
  return callApi(url.repos, key)
}

export const addNewRepo = (data, key) => {
  const options = postRequest(data)
  return callApi(url.repos, key, options)
}

const callApi = async (endpoint, key, options = { method: "GET" }) => {
  await getToken();

  const ip = Config.ROOT_URL;
  const url = `${ip}${endpoint}`;
  let headers = {
    "Content-Type": "application/json",
    "Accept": "application/vnd.github.v3+json"
  };

  if (Authorization !== null) {
    headers["Authorization"] = `token ${Authorization}`;
  }

  return axios({
    url,
    ...options,
    // timeout: 4000,
    headers,
  })
    .then((res) => {
      const data = res.data;
      if (!res.status) {
        let errors = data.error;
        if (
          typeof data.error === "object" &&
          !data.error.hasOwnProperty("type")
        ) {
          errors = "Something went wrong";
        }
        return {
          error: true,
          errors: errors || "Something went wrong",
        };
      }

      return {
        [key]: data.data ? data.data : data,
        error: false,
        errors: "",
      };
    })
    .catch((error) => {
      let errors = "",
        errorType = "";
      if (error.message) {
        errors = error.message || "Something went wrong";
        errorType = error.response.data.hasOwnProperty("type")
          ? error.response.data.type
          : "";
      } else {
        errors = error.message;
      }
      return {
        error: true,
        errors,
        errorType,
      };
    });
};
