import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import Amplify from 'aws-amplify';

import { AppModule } from './app/app.module';
import awsconfig from './aws-exports';
import { environment } from './environments/environment';

Amplify.configure(awsconfig);
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
