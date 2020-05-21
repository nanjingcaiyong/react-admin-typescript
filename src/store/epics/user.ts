import { mergeMap, map, filter } from "rxjs/operators";
import { Epic } from "redux-observable";
import { isActionOf, ActionType } from "typesafe-actions";
import { from } from "rxjs";
import * as actions from "../actions";
import { getUser } from "../../api";

type Action = ActionType<typeof actions>;

const userGetEpic: Epic<Action, Action, any> = (action$, store) => {
  return action$.pipe(
    filter(isActionOf(actions.getUserList)),
    mergeMap((action) => {
      const { type, payload } = action;
      console.log("【epics】", type, payload);
      return from(getUser(payload.id)).pipe(
        map((response) => actions.setUserInfo(response))
      );
    })
  );
};

export default [userGetEpic];
