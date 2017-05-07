import {Thread} from "../interfaces/thread";
import {Action} from "redux";
import {ThreadActions} from "../actions";

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
    switch (action.type) {

      case ThreadActions.ADD_THREAD: {
        const thread = (<ThreadActions.AddThreadAction>action).thread;

        if (state.ids.indexOf(thread.id) != -1) {
          return state;
        }

        return {
          ids: [],
          currentThread: state.currentThread,
          entities: Object.assign({}, state.entities, {
            [thread.id]: thread
          })
        };

      }
    }
  };
