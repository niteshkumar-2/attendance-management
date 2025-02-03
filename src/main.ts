import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
// import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


//   import { bootstrapApplication } from '@angular/platform-browser';
// import { LoginComponent } from './app/auth/login.component';
// import { appConfig } from './app/app.config';

// bootstrapApplication(LoginComponent, appConfig);
