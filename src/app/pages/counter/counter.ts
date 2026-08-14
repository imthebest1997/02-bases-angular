import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
  selector: "app-counter",
  templateUrl: "./counter.html",
  styleUrls: ["./counter.css"],
})
export class CounterComponent {
  // Initializing the counter to 10
  counter: number = 10;
  // Initializing the counterSignal to 10
  counterSignal = signal(10);

  constructor() {
    setInterval(() => {
      // this.counter += 1;
      this.counterSignal.update((currentValue) => currentValue + 1);
      console.log("Tick");
    }, 2000);
  }


  increment(value: number = 1) {
    this.counter += value;
    // Updating the signal value to 10
    this.counterSignal.update((currentValue) => currentValue + value);
  }

  decrement() {
    this.counter -= 1;
    // Updating the signal value to 10
    this.counterSignal.update((currentValue) => currentValue - 1);
  }

  reset() {
    this.counter = 0;

    // Resetting the signal value to 10
    this.counterSignal.set(0);
  }
}
