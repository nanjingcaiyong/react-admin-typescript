import { createAction } from "typesafe-actions";
import { GET_USER_LIST } from '../constants/index'

export const getUserList = createAction(GET_USER_LIST,resolve => (id:number) => resolve({ id }))