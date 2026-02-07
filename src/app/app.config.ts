import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { routes } from './app.routes';
import { MatToolbarModule } from '@angular/material/toolbar';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
   provideRouter(routes, withHashLocation()),
    importProvidersFrom(
      BrowserAnimationsModule, // required for Angular Material animations
      MatToolbarModule,        // needed for navbar
      MatButtonModule          // needed for buttons in navbar
    )
  ]
};
