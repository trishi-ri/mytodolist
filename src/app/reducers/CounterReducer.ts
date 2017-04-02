import { Reducer, Action } from 'redux';
import {AppState} from "../interfaces/app-state";
import {DECREMENT, INCREMENT} from "../actions/CounterActions";

let initialState: AppState = { counter: 0 };

// Create our reducer that will handle changes to the state
export const counterReducer: Reducer<AppState> =
  (state: AppState = initialState, action: Action): AppState => {
    switch (action.type) {
      case INCREMENT:
        return Object.assign({}, state, { counter: state.counter + 1 });
      case DECREMENT:
        return Object.assign({}, state, { counter: state.counter - 1 });
      default:
        return state;
    }
  };
