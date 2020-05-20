import { createAction } from "typesafe-actions";
import { GET_USER_LIST, SET_USER_INFO } from "../constants/index";

export const getUserList = createAction(
  GET_USER_LIST,
  (resolve) => (id: number) => resolve({ id })
);

export const setUserInfo = createAction(
  SET_USER_INFO,
  (resolve) => (response: any) => {
    console.log("执行 -----> setUserInfo, 打印", response);
    return resolve({ response });
  }
);
