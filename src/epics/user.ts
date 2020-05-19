

import { mergeMap,map,filter } from "rxjs/operators";
import { Epic } from "redux-observable";
import { from } from 'rxjs'
import user from '../store/user'
import { getUser } from '../api/index'

const weatherGetEpic: Epic<any, any, any> = (action$, store) =>{
  return action$.pipe(
    filter(action => action.type === 'getUserInfo'),
    mergeMap(action => {
      console.log('111111',action)
     return from(getUser()).pipe(
        map(response => user.actions.setUserInfo(response))
      )
    })
  );
}

export default [
  weatherGetEpic,
];