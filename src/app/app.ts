import { Component, signal } from '@angular/core';

import { Navbar } from './components/shared/navbar/navbar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root-main',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Yugi Perez');
}
