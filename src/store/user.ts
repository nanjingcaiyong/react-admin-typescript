import { handleActions, createActions, Action } from 'redux-actions'
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

const actions = {
  getUserInfo: (id: number):number => id
}

const reducers = {
  getUserInfo(state:IUser, action: Action<number>){
    console.log(state,action)
    const { payload } = action
    return {
      ...state,
      ...states.userList.find(t => t.id === payload)
    };
  }
}

export default {
  actions: createActions(actions),
  reducers: handleActions(reducers, {name:'超人',id:0})
}