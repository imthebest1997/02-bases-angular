import { CounterComponent } from './pages/counter/counter';
import { DragonballComponent } from './pages/dragonball/dragonball';
import { DragonballSuperComponent } from './pages/dragonball-super/dragonball-super';
import { HeroComponent } from './pages/hero/hero';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: CounterComponent,
  },
  {
    path: 'hero',
    component: HeroComponent,
  },
  {
    path: 'dragonball',
    component: DragonballComponent,
  },
  {
    path: 'dragonball-super',
    component: DragonballSuperComponent,
  },
  {
    path: '**',
    redirectTo: '',
  }
];
