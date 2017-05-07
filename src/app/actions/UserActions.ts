import {User} from "../interfaces/user";
import {Action, ActionCreator} from "redux";

export const SET_CURRENT_USER = '[User] Set Current';

export interface SetCurrentUserAction extends Action {
  user: User;
}

export const setCurrentUser: ActionCreator<SetCurrentUserAction> =
  (user) => ({
    type: SET_CURRENT_USER,
    user: user
  });
