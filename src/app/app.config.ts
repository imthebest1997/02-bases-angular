import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),

    //HashStrategy
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ]
};
