import {Thread} from "../interfaces/thread";
import {Action} from "redux";

export interface ThreadsEntities {
  [id: string]: Thread;
}

export interface ThreadsState {
  ids: string[];
  entities: ThreadsEntities;
  currentThread?: string;
}

const initialState: ThreadsState = {
  ids: [],
  entities: {},
  currentThread: null
};

export const ThreadsReducer =
  function (state: ThreadsState = initialState, action: Action): ThreadsState {
    return state;
  };
