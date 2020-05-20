import { combineEpics } from 'redux-observable';
import weatherEpic from "./user";
const epics = combineEpics(
  ...weatherEpic,
);

export default epics;