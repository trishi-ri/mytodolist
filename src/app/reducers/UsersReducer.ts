import {User} from "../interfaces/user";
import {Action} from "redux";

export interface UsersState {
  currentUser: User;
}

const initialState: UsersState = {
  currentUser: null
};

export const UsersReducer =
  function (state: UsersState = initialState, action: Action): UsersState {
    return state;
  };
