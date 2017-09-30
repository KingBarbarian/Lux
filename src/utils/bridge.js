import invoke from "react-native-webview-invoke/browser";

export const requestToken = invoke.default.bind("getToken");
