import { combineEpics } from "redux-observable";
import userGetEpic from "./user";
const epics = combineEpics(...userGetEpic);

export default epics;
