import {Component, Inject} from '@angular/core';
import {Store} from 'redux';
import {AppState} from '../../interfaces/app-state';
import {APP_STORE} from '../../app-store';
import * as CounterActions from '../../actions/CounterActions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  host: {'class': 'block-of-information'}
})
export class CounterComponent {
  counter: number;

  constructor(@Inject(APP_STORE) private store: Store<AppState>) {
    store.subscribe(() => this.readState());
    this.readState();
  }

  readState() {
    let state: AppState = this.store.getState() as AppState;
    this.counter = state.counter;
  }

  increment() {
    this.store.dispatch(CounterActions.increment());
  }

  decrement() {
    this.store.dispatch(CounterActions.decrement());
  }
}
