import Cookies from "js-cookie";

export const getUserToken = () => Cookies.get("userToken") || "~";
export const setUserToken = (token) => Cookies.set("userToken", token);

const baseURL = "https://shopapi.inloya.com/api/";
const token = "C9U0VC0TMRZ5N8RBNUSKT7RG32AG5V34";

export { baseURL, token };
