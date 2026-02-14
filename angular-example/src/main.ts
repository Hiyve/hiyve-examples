/**
 * @fileoverview Angular Example - Application Entry Point
 * @module angular-example/main
 *
 * Bootstraps the Angular standalone application without NgModules.
 *
 * Angular 19 uses standalone components by default, so the app is
 * bootstrapped directly with a root component and an application
 * config rather than an NgModule. The `appConfig` provides all
 * necessary Angular and Hiyve SDK providers at the application root.
 *
 * Architecture:
 *
 *   main.ts
 *     --> bootstrapApplication(AppComponent, appConfig)
 *           |
 *           +-- appConfig provides: Zone, Animations, Hiyve SDK
 *           +-- AppComponent renders: JoinForm or VideoRoom
 */
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
