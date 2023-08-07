import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment } from '../store/counter.actions';

@Component({
  selector: 'counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.scss']
})
export class CounterControlsComponent {

  constructor(private store: Store) { }

  onIncrement() {
    this.store.dispatch(increment({ value: 2 }))
  }

  onDecrement() {
    this.store.dispatch(decrement({ value: 2 }))
  }

}
