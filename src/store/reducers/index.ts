import { ActionType, createReducer } from "typesafe-actions";

import * as actions from "../actions";
type Action = ActionType<typeof actions>;
export interface IUser {name:string, id:number}
interface IState {
  userList: IUser[]
}  
const states:IState = {
  userList:[
    {
      id:1,
      name: '蝙蝠侠'
    },
    {
      id:2,
      name:'蜘蛛侠'
    },
    {
      id:3,
      name:'钢铁侠'
    }
  ]
}
const reducers = {
  getUserInfo(state:any, action: any):any{
    console.log(state,action)
    const { payload } = action
    return {
      ...state,
      ...states.userList.find(t => t.id === payload)
    };
  }
}
export default createReducer({name:'sa',id:1},reducers)