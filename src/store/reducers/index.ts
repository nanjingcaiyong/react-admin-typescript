import { combineReducers } from "redux";
import { user } from "./user";
export type IUserState = import("./user").IUserState;

export type RootState = {
  user: IUserState;
};

export default combineReducers({ user });
