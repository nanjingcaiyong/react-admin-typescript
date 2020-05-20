import { ActionType, createReducer } from "typesafe-actions";
import { SET_USER_INFO } from "../constants";
import * as actions from "../actions";

type Action = ActionType<typeof actions>;
export interface IUserState {
  id: number;
  name: string;
}
const reducers = {
  // 保证和action的type保持一致即可被调用
  [SET_USER_INFO](state: IUserState, action: Action): IUserState {
    const { payload } = action;
    console.log("【reducer】【GET_USER_LIST】", state, payload);
    return Object.assign({}, state, { id: 2, name: "蝙蝠侠" });
  },
};
export const user = createReducer({ name: "sa", id: 1 }, reducers);
