import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ApiComponent} from './components/api.component';

const appRoutes: Routes = [
  {
    path:'',
    component: ApiComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
